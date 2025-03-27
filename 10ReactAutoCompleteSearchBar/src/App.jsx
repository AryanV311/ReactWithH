import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cached, setcached] = useState({})

  const fetchData = async () => {

    try {
      if(cached[input]){
        console.log("Cached return",input);
        setData(cached[input])
        return;
      }

      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`
      );

      const result = await response.json();

      setData(result?.recipes);
      setcached((prev) => ({...prev,[input]:result?.recipes}) )
      setLoading(false);
    } catch (error) {
      console.log("Error fetching:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  // console.log("data", data);

  const Loader = () => (
    <div
      style={{
        width: "20px",
        height: "20px",
        border: "5px solid lightgray",
        borderTop: "5px solid blue",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin:'auto',
      }}
    />
  );

  return (
    <>
      <div className="App">
        <h2>Auto Complete Search Bar</h2>
        <div>
          <input
            type="text"
            className="search-input"
            placeholder="search here ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setShowResult(true)}
            onBlur={() => setShowResult(false)}
          />
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="result-container">
            {showResult &&
              data.map((item) => (
                <span key={item.id} className="result">
                  {item.name}
                </span>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;

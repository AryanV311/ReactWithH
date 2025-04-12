import { useEffect, useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=500");
      const data = await response.json();
      console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const PAGE_SIZE = 10;

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1 )
  }
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1 )
  }


  return (
    <>
      <div className="App">
        <h1>Pagination</h1>
        <div className="pagination-container">
          <button disabled={currentPage <= 0} className="prev-page" onClick={handlePrevPage}>◀️</button>
          {
            [...Array(noOfPages).keys()].map((n) =>(
              <button key={n} onClick={() => setCurrentPage(n)} className={`pagination ${currentPage === n ? "active" : ""}`}>{n}</button>
            ))
          }
          <button disabled={currentPage === noOfPages -1 } className="next-page" onClick={handleNextPage}>▶️</button>
        </div>
        <div className="products-container">
          {products.slice(start,end).map((item) => ( 
            <ProductList key={item.id} title={item.title} img={item.thumbnail} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

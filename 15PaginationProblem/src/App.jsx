import { useEffect, useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <div className="App">
        <h1>Pagination</h1>
        <div className="products-container">
          {products.map((item) => ( 
            <ProductList key={item.id} title={item.title} img={item.thumbnail} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { ProductsCard } from "../components/ProductsCard";
import axios from "axios";
import { CiSearch } from "react-icons/ci";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('');
  const [cached, setcached] = useState({});

  const fetchData = async () => {

    if(cached[input]){
      console.log("Cached return:",input);
      setProducts(cached[input])
      return;
    }

    const data = await axios.get(`https://dummyjson.com/products/search?q=${input}`);

    setProducts(data.data.products);
    setcached((prev) => ({...prev, [input]:data?.data?.products}))
  };

  console.log(products);

  useEffect(() => {

    const timer = setTimeout(fetchData, 300 )

    return () => {
      clearTimeout(timer)
    }  
  }, [input]);

  return (
    <div className="home">
      <div className="main">
        <h1 className="heading">Welecome to Redux toolkit store</h1>

        <span className="search-section">
          <input type="text" placeholder="search product here..." onChange={(e) => setInput(e.target.value)} />
          <div className="icon"><CiSearch  /></div>
        </span>
      </div>
      <div className="products">
        {products.map((items) => (
          <ProductsCard key={items.id} products={items} />
        ))}
      </div>
    </div>
  );
};

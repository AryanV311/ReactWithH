import React, { useEffect, useState } from 'react'
import { ProductsCard } from '../components/ProductsCard'
import axios from "axios"

export const Home = () => {

    const [products, setProducts] = useState([]);

    const fetchData = async() => {
      const data = await axios.get('https://dummyjson.com/products')
      
      setProducts(data.data.products)
    }

    console.log(products);

    useEffect(() => {
      fetchData()
    },[])

  return (
    <div className='home'>
        <h1 className='heading'>Welecome to Redux toolkit store</h1>
        <div className='products'>
                {
                  products.map((items) => (
                    <ProductsCard key={items.id} products={items} />
                  ))
                }
        </div>
    </div>
  )
}

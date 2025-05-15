import React from 'react'
import { useDispatch } from 'react-redux'
import { addTocart } from '../store/cartslice';

export const ProductsCard = ({products}) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addTocart(products))
  }

  return (
    <div className='product-card'>
      <img src={products.images} alt="" />
      <p>{products.title}</p>
      <p>$ {products.price}</p>
      <button className='addtocart' onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

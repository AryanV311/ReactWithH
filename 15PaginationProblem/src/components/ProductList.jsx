import React from 'react'

export const ProductList = ({title, img}) => {
  return (
    <div className='product-card'>
        <img src={img} alt="" className='product-img' />
        <span>{title}</span>
    </div>
  )
}

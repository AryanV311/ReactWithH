import React from 'react'
import "./ProductCard.css"

export const ProductCard = ({productData}) => {
  return (
    <div style={{border:"1px solid black"}}>
        <div style={{}}>
            <img src={productData.imageUrl} alt="img" height={"50px"} />
            <div style={{marginTop:"5px"}}>
                <p>{productData.productName}</p>
                <p>
                    {productData.material}
                </p>
                <p>{productData.color}</p>
                <p>{productData.size}</p>
                <p>{productData.brand}</p>
            </div>
        </div>
    </div>
  )
}

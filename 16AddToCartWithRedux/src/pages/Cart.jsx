import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../store/cartslice";

export const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  console.log("itemmmmm", items);

  const dispatch = useDispatch()



  return (
    <div className="carts">
      <h2>Cart items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} className="cart-item">
            <div className="cart-lside">
              <img src={item.images} alt="" />
              <div className="cart-button">
                  <button onClick={() => dispatch(removeFromCart(item))}> - </button>
                  <button onClick={() => dispatch(addTocart(item))}> + </button>
              </div>
            </div>
            <p>
              {item.title} x {item.quantity} = ₹{item.quantity * item.price}
            </p>
          </div>
        );
      })}
    </div>
  );
};

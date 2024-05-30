import { useState } from "react";
import './Cart.css';
export default function Cart({cartItems}) {
 
  return (
    <div className="cart">
      <h1>CART</h1>
       {
        cartItems.map((item) => {
          return (
            <div key={item.name}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
          )
        })
       }
      <button>CONFIRMAR</button>
    </div>
  );
}

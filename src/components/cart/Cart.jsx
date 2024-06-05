import { useState } from "react";
import './Cart.css';
export default function Cart({cartItems}) {
  
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        )
      })}
    </div>
  )
  
  
 
}

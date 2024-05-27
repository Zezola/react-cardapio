import { useState } from "react";
import './Cart.css';
export default function Cart({cartItems}) {
 
  return (
    <div className="cart">
      <h1>CART</h1>
       {
        cartItems
       }
      <button>CONFIRMAR</button>
    </div>
  );
}

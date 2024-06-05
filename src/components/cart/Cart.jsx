import { useState } from "react";
import './Cart.css';
export default function Cart({cartItems,handlePlusButtonClick,handleMinusButtonClick}) {

  const handlePlusBtn = (name) => {
    handlePlusButtonClick(name)
  }

  const handleMinusBtn = (name) => {
    handleMinusButtonClick(name)
  }
  
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={() => handlePlusBtn(item.name)}>+</button>
            <button onClick={() => handleMinusBtn(item.name)}>-</button>
          </div>
        )
      })}
    </div>
  )
  
  
 
}

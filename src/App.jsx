import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container";
import Search from "./Search";
import Cart from "./components/cart/Cart";
import Menu from "./components/menu/Menu";

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartItem, setItem] = useState({name: "", price: 0, quantity: 0})
  const handleInsertCartItem = (name, price) => {
    setCartItems([...cartItems, {
      name: name,
      price: price
    }])
  }
  const menuItems = [
    {name: "XTudo", price: 13},
    {name: "XEgg", price: 12},
    {name: "XBurguer", price: 11}
  ]
  
  return (
    <div className="app">
      <Menu menuItems = {menuItems} handleInsertCartItem={handleInsertCartItem} cartItems={cartItems}/>
      <h2>CART ITEMS </h2>
      <Cart cartItems = {cartItems}/>
    </div>
  );
}

export default App;

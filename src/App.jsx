import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container";
import Search from "./Search";
import Cart from "./components/cart/Cart";
import Menu from "./components/menu/Menu";

function App() {
  

  const [cartItems, setCartItems] = useState([])
  const [cartItem, setCartItem] = useState({})

  const handleInsertCartItem = (item) => {
    //TODO: Search the cartItems and if a item with the same name is present, we  do quantity + 1. Else, we add the item
    if (cartItems.find(i => i.name === item.name) != undefined) {
      updateItemQuantity(item.name)
    } else {
      setCartItems([...cartItems, {name: item.name, price: item.price, quantity: 1}])
    }     
     
    }

  const updateItemQuantity = (name) => {
    setCartItems(prevCartItems => prevCartItems.map(item => 
    item.name === name ? {...item, quantity: item.quantity + 1} : item))
  }

  const menuItems = [
    {name: "xtudo", price: 13},
    {name: "XEgg", price: 12},
    {name: "XBurguer", price: 11}
  ]
  
  return (
    <div className="app">
      <Menu menuItems = {menuItems} handleInsertCartItem={handleInsertCartItem} cartItems={cartItems}/>

      <Cart cartItems = {cartItems}/>
    </div>
  );
}

export default App;

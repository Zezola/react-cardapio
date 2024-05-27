import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container";
import Search from "./Search";
import Cart from "./components/cart/Cart";
import Menu from "./components/menu/Menu";

function App() {
  const [query, setQuery] = useState("");
  let [l, setList] = useState([]);
  const menuItems = [
    {name: "XTudo", price: 13},
    {name: "XEgg", price: 12},
    {name: "XBurguer", price: 11}
  ]
  const [cartItems, setCartItems] = useState([])
  return (
    <div className="app">
      <Menu menuItems = {menuItems} setCartItems = {setCartItems} cartItems = {cartItems}/>
      <h2>CART ITEMS </h2>
      {cartItems}
      <Cart cartItems = {cartItems}/>
      
      {/* 
      <Search onQuery={setQuery} onListUpdate={setList} />
      <Container query={query} l={l} />
  */}
    </div>
  );
}

export default App;

import { useState } from "react";
import { pizzas } from "../../pizzas";
import './Menu.css';

const Menu = ({menuItems, handleInsertCartItem}) => {
  const handleClick = (item) => {
   
    handleInsertCartItem(item)
  }

  return (
    <div className="menu">
      <h1>MENU</h1>

      {
        menuItems.map((item) => {
          return (
            <div key={item.name}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => handleClick(item)}>COMPRAR</button>
            </div>
            
          )
        })
      }
    </div>
    
          /*
          <tr>
            <td>Pizza 1</td>
            <td>Descricao 1</td>
            <td>20.00</td>
            <button>Carrinho</button>
          </tr>
          <tr>
            <td>Pizza 1</td>
            <td>Descricao 1</td>
            <td>20.00</td>
            <button>Carrinho</button>
          </tr>
          <tr>
            <td>Pizza 1</td>
            <td>Descricao 1</td>
            <td>20.00</td>
            <button>Carrinho</button>
          </tr>
          <tr>
            <td>Pizza 1</td>
            <td>Descricao 1</td>
            <td>20.00</td>
            <button>Carrinho</button>
          </tr>
  */
    
  );
};

export default Menu;

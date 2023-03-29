import React from "react";
import { createContext } from "react";
import "./style.css";
import { Route } from "react-router-dom";
import { useState } from "react";
import Products from "./components/Products";
import Cardd from "./components/Cardd";

import { data } from "./data";

export const BooksContext = createContext();

export default function App() {
  const [state, setState] = useState({
    bookList: data,
    cart: [],
  });

  const addToCart = (book) =>
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
          cartItem.id === book.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
        : [...state.cart, { ...book, count: 1 }],
    });

  return (
    <BooksContext.Provider value={{ state: state, addToCart }}>
      <div className="App">
        <h1>
          Alışveriş Sepeti Yapımı
          <img
            src="https://avatars3.githubusercontent.com/u/60869810?v=4"
            alt="React Dersleri"
          />{" "}
        </h1>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cardd} />
      </div>
    </BooksContext.Provider>
  );
}

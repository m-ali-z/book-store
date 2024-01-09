import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_URL } from "./App";
import BookStore from "./components/BookStore";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartContextProvider from "./store/book-store-context";
export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [books, setBooks] = useState([{}]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []); // Fetch whenever numberOfBooks changes

  function handleOpenCart() {
    setIsCartOpen((prevState) => {
      return !prevState;
    });
  }

  return (
    <CartContextProvider>
      <div>
        <Header onOpen={handleOpenCart} />
        {isCartOpen && <Cart books={books} onClose={handleOpenCart} />}
        <BookStore books={books} />
      </div>
    </CartContextProvider>
  );
}

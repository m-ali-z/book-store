import { createContext, useCallback, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemInCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartState, setCartState] = useState({ items: [] });

  function handleUpdateItemInCart(id, amount) {
    console.log(amount);
    setCartState((prevState) => {
      const updatedItems = [...prevState.items];

      const cartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const cartItem = { ...updatedItems[cartItemIndex] };
      cartItem.quantity += amount;
      if (cartItem.quantity <= 0) {
        updatedItems.splice(cartItemIndex, 1);
      } else {
        updatedItems[cartItemIndex] = cartItem;
      }
      return { items: updatedItems };
    });
  }

  function handleAddItemToCart(book, price) {
    setCartState((prevState) => {
      const updatedItems = [...prevState.items];

      const cartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === book.id
      );
      const cartItem = updatedItems[cartItemIndex];

      if (cartItem) {
        const updatedItem = {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
        updatedItems[cartItemIndex] = updatedItem;
      } else {
        updatedItems.push({
          id: book.id,
          title: book.title,
          quantity: 1,
          price: price,
        });
      }
      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    items: cartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemInCart: handleUpdateItemInCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

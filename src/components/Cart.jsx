import React, { useContext } from "react";
import { CartContext } from "../store/book-store-context";
export default function Cart({ isOpen, onClose, books }) {
  const { items, updateItemInCart } = useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  function handleClose() {
    onClose();
  }
  return (
    <>
      <main
        className={`sidebar open p-4 flex flex-col w-[50rem] justify-between overflow-auto`}
      >
        <button
          className="font-bold text-xl mb-8 text-left"
          onClick={handleClose}
        >
          x
        </button>
        {items.length > 0 && (
          <div>
            <ul>
              {items.map((item) => {
                console.log(item.id);
                return (
                  <li
                    key={item.id}
                    className="flex flex-1  flex-col md:flex-row items-center my-4 bg-slate-400 rounded-md p-4 justify-between "
                  >
                    <p className="text-center">{item.title}</p>
                    <div>
                      <span className="flex gap-2">
                        <button onClick={() => updateItemInCart(item.id, -1)}>
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => updateItemInCart(item.id, 1)}>
                          +
                        </button>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {items.length === 0 && (
          <p className="text-center my-auto">No items selected yet!</p>
        )}
        {items.length > 0 && (
          <div className="flex flex-col gap-2 justify-start">
            <div className="flex gap-2 text-xl">
              <p className="font-semibold ">Total:</p>
              <p className="font-extralight">${totalPrice}</p>
            </div>
            <div>
              <p className="font-bold text-white flex gap-4">
                <button>Cancel</button>
                <button
                  onClick={handleClose}
                  className="bg-black p-2 rounded shadow-black shadow-lg"
                >
                  Checkout
                </button>
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

import React, { useCallback, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../store/book-store-context";
import Modal from "./Modal";
const Product = React.memo(({ Book, price }) => {
  const modal = useRef();

  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = useCallback(() => {
    addItemToCart(Book, price);
  }, [Book, price, addItemToCart]);

  function openModal() {
    modal.current.open();
  }
  function closeModa() {
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal} Book={Book} />
      <article className="flex flex-col h-full">
        <button onClick={openModal} className="w-full">
          <img
            src={Book.image_url}
            className="object-cover w-full rounded h-[8rem] md:h-[20rem]"
          />
        </button>
        <div className="flex flex-1 flex-col gap-2 pb-4 justify-between rounded-b-md bg-[#f1f5ee] px-2 flex-grow">
          <p className="font-semibold truncate">{Book.title}</p>
          <p className="flex-auto">{Book.authors}</p>
          <p className="font-bold">${price}</p>
          <p>
            <button
              className="bg-[#c89888] p-4 rounded-xl active:bg-[#c5846f] transition-all duration-300 ease-in to-black active:drop-shadow-lg shadow-black"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </p>
        </div>
      </article>
    </>
  );
});

export default Product;

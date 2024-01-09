import React, { useRef } from "react";
import { useImperativeHandle, forwardRef } from "react";
const Modal = forwardRef(function Modal({ Book }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  function handleClose() {
    dialog.current.close();
  }
  return (
    <dialog
      ref={dialog}
      className="h-2/3 w-2/3 bg-white p-4 rounded outline-none drop-shadow-2xl backdrop:bg-black/40"
    >
      <button onClick={handleClose} className="font-bold text-lg">
        x
      </button>
      <div className="h-full w-full flex flex-col md:flex-row gap-4">
        <img
          src={Book.image_url}
          alt="Book img"
          className="h-[20rem] w-[20rem] object-contain md:pt-8"
        />
        <div className="text-left ">
          <p className="font-sans text-center font-extrabold">
            {Book.rating}⭐
          </p>
          <p className="font-sans">{Book.description}</p>
        </div>
      </div>
    </dialog>
  );
});

export default Modal;

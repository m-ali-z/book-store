import { useState } from "react";
import logoImg from "../assets/logo.png";
export default function Header({ onOpen, onClose }) {
  const [searchBar, setSearchBar] = useState(false);

  function handleOpenSearchBar() {
    setSearchBar(true);
  }
  function handleCloseSearchBar() {
    setSearchBar(false);
  }
  function openCart() {
    onOpen();
  }

  return (
    <header className="mx-auto w-[80%] py-8">
      <section className="flex justify-between">
        <div className="flex flex-col-reverse md:flex md:flex-row gap-4 items-start">
          <img src={logoImg} />
          <div className="w-full h-full">
            <input
              className="border-2 p-2 border-black-200 border-solid rounded-xl"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex gap-4 items-start py-2">
          <button onClick={openCart}>CART</button>
          <button>SIGN IN</button>
        </div>
      </section>
      <section className="flex px-[10px] gap-8 justify-center py-8 font-semibold">
        <button>Home</button>
        <button>Categories</button>
        <button>About</button>
        <button>Contact</button>
      </section>
    </header>
  );
}

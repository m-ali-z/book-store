import React from "react";
import Product from "./Product";
const BookStore = React.memo(({ books }) => {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20 my-[5%] mx-[10%] ">
      {books.map((book) => {
        let price = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
        return (
          <div key={book.id} className="">
            <Product Book={book} price={price} />
          </div>
        );
      })}
    </ul>
  );
});
export default BookStore;

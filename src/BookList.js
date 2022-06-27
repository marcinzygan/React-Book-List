import React from "react";
import Book from "./Book";
import data from "./data.js";
const BookList = () => {
  return (
    <section className="booklist">
      {data.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};

export default BookList;

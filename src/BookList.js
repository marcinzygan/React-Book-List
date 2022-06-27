import React from "react";
import Book from "./Book";
import data from "./data.js";
const BookList = () => {
  return (
    <section className="booklist">
      {data.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          img={book.img}
        />
      ))}
    </section>
  );
};

export default BookList;

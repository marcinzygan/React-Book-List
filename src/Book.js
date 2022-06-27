import React from "react";

const Book = ({ title, author, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;

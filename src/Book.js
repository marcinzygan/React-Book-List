import React from "react";

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title}></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

export default Book;

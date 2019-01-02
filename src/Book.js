import React from 'react';

const Book = ({ match }) => {
  let book = match.params.book;
  let json = require("./assets/books/" + book + ".json");
  return (
    <h3>{json.name}</h3>
  );
};

export default Book;
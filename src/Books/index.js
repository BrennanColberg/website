import "./Books.scss";

import React from "react";

import Book from "./Book";
import json from "./books";

export default () => (
  <main className="books">
    {json.map(book => (
      <Book book={book} />
    ))}
  </main>
);

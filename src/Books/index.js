import React from "react";

import Book from "./Book";

let books = [
  {
    title: "Free At Last",
    subtitle: "The Sudbury Valley School",
    author: "Daniel Greenberg",
    date: "May 13, 2019",
    link: "https://www.amazon.com/Free-Last-Sudbury-Valley-School/dp/1888947004"
  }
];

export default () => (
  <div>
    {books.map(book => (
      <Book book={book} />
    ))}
  </div>
);

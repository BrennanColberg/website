import React from "react";

export default ({ book: { title, subtitle, author, date, link } }) => (
  <div className="book">
    <span className="date">{date}</span>
    <span className="title">{title}</span>
    {subtitle && <span className="subtitle">{subtitle}</span>}
    <span className="author">{author}</span>
  </div>
);

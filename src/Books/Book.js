import React from "react";

export default ({ book: { title, subtitle, author, date, link } }) => (
  <tr>
    <td>{title}</td>
    <td>{subtitle}</td>
    <td>{author}</td>
    <td>{date}</td>
    <td>
      <a href={link} target="_blank">
        Amazon
      </a>
    </td>
  </tr>
);

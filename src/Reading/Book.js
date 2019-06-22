import React from "react";

// // returns a color based on a rating from -1.0 to 1.0
// // where it is closer to green as it gets closer to 1.0 and red along with -1.0
// function shadowColorFromRating(rating) {}

export default ({ book: { title, subtitle, author, date, link } }) => (
	<div className="book">
		<span className="date hidden">{date}</span>
		<span className="title">{title}</span>
		{subtitle && <span className="subtitle">{subtitle}</span>}
		<span className="author">{author}</span>
	</div>
);

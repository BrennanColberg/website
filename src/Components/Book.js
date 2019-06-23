import "./Book.scss";

import React from "react";
import { Link } from "react-router-dom";

// returns a color based on a rating from -1.0 to 1.0
// 1.0 makes it pure green, -1.0 pure red, 0.0 exact middle gray (127)
// (middling ratings make it grayer by adding proportionally more blue)
// all colors have opacity of 40% (alpha 0.4)
function generateBackgroundColor(rating) {
	if (rating === undefined) return "inherit";
	else {
		return `rgba(
			${127 - Math.floor(rating * 128)}, 
			${127 + Math.floor(rating * 128)},
			${127 - Math.abs(Math.floor(rating * 128))}, 
			0.5
		)`;
	}
}

function generateBook({ title, subtitle, authors, finish: { date }, rating }) {
	return (
		<div
			className="book"
			style={{
				backgroundColor: generateBackgroundColor(rating)
			}}
		>
			<span className="date hidden">{date}</span>
			<span className="title">{title}</span>
			{subtitle && <span className="subtitle">{subtitle}</span>}
			<div className="authors">
				{/* splits authors apart, puts each in their own span for CSS */}
				{authors.map((author, i) => (
					<span key={i} className="author">
						{author}
					</span>
				))}
			</div>
		</div>
	);
}

export default ({ book }) => {
	const { slug, listed } = book;
	if (slug && listed) {
		return <Link to={`/reading/${slug}`}>{generateBook(book)}</Link>;
	} else {
		return generateBook(book);
	}
};

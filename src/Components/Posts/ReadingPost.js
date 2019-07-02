import "./ReadingPost.scss";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Quote = ({ text, page, anchor }) => (
	<div className="quote" id={anchor}>
		<a href={`#${anchor}`} className="anchor">
			#{anchor}
		</a>
		<blockquote>
			<ReactMarkdown
				source={
					text.replace(/\n/g, "\n\n") // prep line breaks for md parsing
				}
			/>
		</blockquote>
		{page && page.length > 0 && (
			<h4 className="pages">
				(page
				{page.length > 1
					? `s ${page[0]} ${page[1] - page[0] > 1 ? "to" : "and"} ${page[1]}`
					: ` ${page[0]}`}
				)
			</h4>
		)}
	</div>
);

export default ({ type, text, post: { title, subtitle, authors, slug } }) => {
	// load in quotes from json (if they exist)
	const [quotes, setQuotes] = useState([]);
	useEffect(
		_ => {
			try {
				const newQuotes = require(`../../Posts/${type}/${slug}.json`).map(
					(quote, i) => <Quote {...quote} key={i} anchor={i + 1} />
				);
				setQuotes(newQuotes);
			} catch {}
		},
		[type, slug]
	);

	return (
		<>
			<h1 className="title">
				{title}
				{subtitle && (
					<>
						: <span className="no-bold">{subtitle}</span>
					</>
				)}
			</h1>
			<h2 className="authors">{authors.join(",")}</h2>
			<ReactMarkdown source={text} />
			{quotes}
		</>
	);
};

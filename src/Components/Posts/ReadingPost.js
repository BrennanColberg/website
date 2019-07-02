import "./ReadingPost.scss";

import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Quote = ({ text, page }) => (
	<div className="quote">
		<blockquote>
			<ReactMarkdown source={text.replace("\n", "\n\n")} />
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

export default ({ type, text, post: { title, subtitle, authors, slug } }) => (
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
		{require(`../../Posts/${type}/${slug}.json`).map(quote => (
			<Quote {...quote} />
		))}
	</>
);

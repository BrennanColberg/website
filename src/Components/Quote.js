import React from "react";
import ReactMarkdown from "react-markdown";

const Anchor = ({ number }) => (
	<a href={`#${number}`} className="anchor hidden">
		#{number}
	</a>
);

const PageNumber = ({ page }) => {
	// input validation
	if (page === undefined || page.length === 0) return null;

	return (
		<h5 className="pages">
			{page.length === 1
				? `(page ${page[0]})`
				: page.length === 2
				? `(pages ${page[0]} and ${page[1]})`
				: `(pages ${page[0]} to ${page[1]})`}
		</h5>
	);
};

export default ({ text, page, number }) => (
	<blockquote>
		<Anchor number={number} />
		<ReactMarkdown source={text.replace(/\n/g, "\n\n")} />
		<PageNumber page={page} />
	</blockquote>
);

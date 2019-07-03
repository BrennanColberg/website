import React from "react";
import ReactMarkdown from "react-markdown";

export default ({ post, text, quotes }) => {
	const { title, subtitle, authors } = post;

	return (
		<>
			<h2>
				{title}
				{subtitle && (
					<>
						: <span className="no-bold">{subtitle}</span>
					</>
				)}
			</h2>
			<h3 className="authors">{authors.join(", ")}</h3>
			<ReactMarkdown source={text} />
			{quotes}
		</>
	);
};

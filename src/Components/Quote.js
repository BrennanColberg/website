import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { PageNumberCitation } from "./Citation";

const Anchor = ({ number }) => (
	<a href={`#${number}`} className="anchor hidden">
		#{number}
	</a>
);

export default ({ book, quote, number, citation = PageNumberCitation }) => {
	return (
		<Link
			to={`/reading/${book.slug}/${number}`}
			className="invisible"
			id={number}
		>
			<blockquote>
				<Anchor number={number} />
				<ReactMarkdown source={quote.text.replace(/\n/g, "\n\n")} />
				<h5 className="citation">
					<Link to={`/reading/${book.slug}#${number}`} className="invisible">
						<ReactMarkdown source={citation({ book, quote })} />
					</Link>
				</h5>
			</blockquote>
		</Link>
	);
};

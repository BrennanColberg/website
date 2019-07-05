import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { PageNumberCitation } from "./Citation";

const Anchor = ({ slug }) => (
	<a href={`#${slug}`} className="anchor hidden">
		#{slug}
	</a>
);

export default ({ book, quote, citation = PageNumberCitation }) => (
	<Link
		to={`/reading/${book.slug}/${quote.slug}`}
		className="invisible"
		id={quote.slug}
	>
		<blockquote>
			<Anchor slug={quote.slug} />
			<ReactMarkdown source={quote.text.replace(/\n/g, "\n\n")} />
			<h5 className="citation">
				<Link to={`/reading/${book.slug}#${quote.slug}`} className="invisible">
					<ReactMarkdown source={citation({ book, quote })} />
				</Link>
			</h5>
		</blockquote>
	</Link>
);

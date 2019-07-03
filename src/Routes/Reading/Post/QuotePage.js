import React from "react";
import { Link } from "react-router-dom";

import Quote from "../../../Components/Quote";

// will enhance later; for now, cloning
export default ({ text, page, number, title, subtitle, authors, slug }) => (
	<>
		<Link to={`/reading/${slug}`}>
			<h2>
				{title}
				{subtitle && (
					<>
						: <span className="no-bold">{subtitle}</span>
					</>
				)}
			</h2>
			<h3 className="authors">{authors.join(", ")}</h3>
		</Link>
		<Quote {...{ text, page, number }} />
	</>
);

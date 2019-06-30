import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Date from "../Date";

export default ({ type, text, post: { title, subtitle, finish } }) => (
	<>
		<Link to={`/${type}`} className="hidden">
			<h3>← Back</h3>
		</Link>
		<h1 className="title">
			{title}
			{subtitle && <>: {subtitle}</>}
		</h1>
		{finish && finish.date && (
			<h2>
				<Date date={finish.date} />
			</h2>
		)}
		<ReactMarkdown source={text} />
	</>
);

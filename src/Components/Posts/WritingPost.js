import React from "react";
import ReactMarkdown from "react-markdown";

import Date from "../Date";

export default ({ text, post: { title, subtitle, finish } }) => (
	<>
		<h2 className="title">
			{title}
			{subtitle && <>: {subtitle}</>}
		</h2>
		{finish && finish.date && (
			<h3>
				<Date date={finish.date} />
			</h3>
		)}
		<ReactMarkdown source={text} />
	</>
);

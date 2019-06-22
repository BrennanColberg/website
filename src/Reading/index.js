import "./Reading.scss";

import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Error404 from "../404";
import Splash from "./Splash";

import books from "./books.json";

function loadPostRoutes(routes, setRoutes) {
	books.forEach(async ({ file, slug, visible, published }, i) => {
		if (slug && (visible || published)) {
			// get markdown text from file
			const source = await fetch(require(`./posts/${file}`));
			const text = await source.text();
			// create new route based on given slug
			const route = (
				<Route
					key={i}
					path={`/reading/${slug}`}
					component={() => <ReactMarkdown source={text} />}
				/>
			);
			// add route to be rendered
			setRoutes([...routes, route]);
		}
	});
}

export default () => {
	const [routes, setRoutes] = useState([]);

	// render routes for each post, once at creation of component
	useEffect(() => loadPostRoutes(routes, setRoutes), []);

	return (
		<Switch>
			<Route exact path="/reading" component={Splash} />
			{routes}
			<Route component={Error404} />
		</Switch>
	);
};

import React from "react";
import { Route } from "react-router-dom";

import WritingPost from "./Posts/WritingPost";

const fetchTextIfExists = async (type, slug) => {
	try {
		const source = await fetch(require(`../Posts/${type}/${slug}.md`));
		return await source.text();
	} catch {
		return "";
	}
};

export default async (type, postComponent = WritingPost) => {
	// get list of posts from index file
	let posts = require(`../Posts/${type}/index.json`);
	// turn each post into a page based on the markdown version
	const routePromises = posts.map(async (post, i) => {
		const { slug } = post;
		if (slug) {
			// get markdown text from file ({slug}.md)
			let text = await fetchTextIfExists(type, slug);
			// create new route based on given slug
			return (
				<Route
					key={i}
					path={`/${type}/${slug}`}
					component={_ =>
						React.createElement(postComponent, { type, text, post })
					}
				/>
			);
		}
	});
	// wait for all routes to be loaded
	const routes = await Promise.all(routePromises);
	// trim out undefined results of posts that don't turn into routes
	// (don't have a slug and hence aren't visible)
	const validRoutes = routes.filter(route => route !== undefined);
	return validRoutes;
};

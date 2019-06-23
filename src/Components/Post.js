import React from "react";
import { Link, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Date from "./Date";

async function loadPostRoutes(type) {
	// get list of posts from index file
	const posts = require(`../Posts/${type}/index.json`);
	// turn each post into a page based on the markdown version
	const routePromises = posts.map(async (post, i) => {
		const { slug } = post;
		if (slug) {
			// get markdown text from file ({slug}.md)
			const source = await fetch(require(`../Posts/${type}/${slug}.md`));
			const text = await source.text();
			// create new route based on given slug
			return (
				<Route
					key={i}
					path={`/${type}/${slug}`}
					component={() => <Post type={type} text={text} post={post} />}
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
}

const Post = ({
	type,
	text,
	post: {
		title,
		subtitle,
		finish: { date }
	}
}) => (
	<>
		<Link to={`/${type}`} className="hidden">
			<h3>← Back</h3>
		</Link>
		<h1 className="title">
			{title}
			{subtitle && <>: {subtitle}</>}
		</h1>
		{date && (
			<h2>
				<Date date={date} />
			</h2>
		)}
		<ReactMarkdown source={text} />
	</>
);

export default Post;
export { loadPostRoutes };

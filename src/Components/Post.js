import React from "react";
import { Link, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";

async function loadPostRoutes(type) {
	// get list of posts from index file
	const posts = require(`../Posts/${type}/index.json`);
	// turn each post into a page based on the markdown version
	const routePromises = posts.map(async ({ slug, visible }, i) => {
		if (slug && visible) {
			// get markdown text from file ({slug}.md)
			const source = await fetch(require(`../Posts/${type}/${slug}.md`));
			const text = await source.text();
			// create new route based on given slug
			return (
				<Route
					key={i}
					path={`/${type}/${slug}`}
					component={() => <Post type={type} text={text} />}
				/>
			);
		}
	});
	// wait for all routes to be loaded
	const routes = await Promise.all(routePromises);
	// trim out undefined results of posts that don't turn into routes
	// (don't have a slug or aren't visible)
	const validRoutes = routes.filter(route => route !== undefined);
	return validRoutes;
}

const Post = ({ type, text }) => (
	<>
		<Link to={`/${type}`} className="hidden">
			<h3>← Back</h3>
		</Link>
		<ReactMarkdown source={text} />
	</>
);

export default Post;
export { loadPostRoutes };

import React from "react";
import { Link, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";

async function loadPostRoutes(posts, folder, path) {
	let routes = posts.map(async ({ file, slug, visible }, i) => {
		if (slug && visible) {
			// get markdown text from file
			const source = await fetch(require(`${folder}/${file}`));
			const text = await source.text();
			// create new route based on given slug
			return (
				<Route
					key={i}
					path={`${path}/${slug}`}
					component={() => <Post path={path} text={text} />}
				/>
			);
		}
	});
	// wait for all routes to be loaded
	routes = await Promise.all(routes);
	// trim out undefined results of posts that don't turn into routes
	// (don't have a slug or aren't visible)
	routes = routes.filter(route => route !== undefined);
	return routes;
}

const Post = ({ path, text }) => (
	<>
		<Link to={path} className="hidden">
			<h3>← Back</h3>
		</Link>
		<ReactMarkdown source={text} />
	</>
);

export default Post;
export { loadPostRoutes };

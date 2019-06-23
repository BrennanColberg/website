import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { loadPostRoutes } from "../Post";

import Error404 from "../404";
import Splash from "./Splash";

// import { loadPostRoutes } from "../Post";

import posts from "./posts/index.json";

export default () => {
	const [routes, setRoutes] = useState([]);

	// render routes for each post, once at creation of component
	useEffect(() => {
		loadPostRoutes(posts, "./Writing/posts", "/writing").then(setRoutes);
	}, []);

	return (
		<Switch>
			<Route exact path="/writing" component={Splash} />
			{routes}
			<Route component={Error404} />
		</Switch>
	);
};

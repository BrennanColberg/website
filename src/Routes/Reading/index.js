import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import loadPostRoutes from "../../Components/loadPostRoutes";
import ReadingPost from "../../Components/Posts/ReadingPost";
import Error404 from "../404";
import Splash from "./Splash";

export default () => {
	const [routes, setRoutes] = useState([]);

	// render routes for each post, once at creation of component
	useEffect(() => {
		loadPostRoutes("reading", ReadingPost).then(setRoutes);
	}, []);

	return (
		<Switch>
			<Route exact path="/reading" component={Splash} />
			{routes}
			<Route component={Error404} />
		</Switch>
	);
};

import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import loadPostRoutes from "../../Components/loadPostRoutes";
import Error404 from "../404";
import Splash from "./Splash";

export default _ => {
	const [routes, setRoutes] = useState([]);

	// render routes for each post, once at creation of component
	useEffect(_ => {
		loadPostRoutes("writing").then(setRoutes);
	}, []);

	return (
		<Switch>
			<Route exact path="/writing" component={Splash} />
			{routes}
			<Route component={Error404} />
		</Switch>
	);
};

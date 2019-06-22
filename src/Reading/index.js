import "./Reading.scss";

import React from "react";
import { Switch, Route } from "react-router-dom";

import Error404 from "../404";
import Splash from "./Splash";

export default () => (
	<Switch>
		<Route exact path="/reading" component={Splash} />
		<Route component={Error404} />
	</Switch>
);

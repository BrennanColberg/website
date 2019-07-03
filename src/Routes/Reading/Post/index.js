import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Splash from "./Splash";
import QuotePage from "./QuotePage";
import Quote from "../../../Components/Quote";
import Error404 from "../../404";

export default ({ text, post }) => {
	const { slug } = post;
	const [quotes, setQuotes] = useState([]);
	const [quoteRoutes, setQuoteRoutes] = useState([]);

	useEffect(_ => {
		try {
			const quoteData = require(`../../../Posts/reading/${slug}.json`);
			let newQuotes = [];
			let newQuoteRoutes = [];
			quoteData.forEach((quoteDatum, i) => {
				const number = i + 1;
				newQuotes.push(
					<Link to={`/reading/${slug}/${number}`}>
						<Quote key={i} {...quoteDatum} number={number} />
					</Link>
				);
				newQuoteRoutes.push(
					<Route
						key={i}
						path={`/reading/${slug}/${number}`}
						component={_ => (
							<QuotePage {...post} {...quoteDatum} number={number} />
						)}
					/>
				);
				setQuotes(newQuotes);
				setQuoteRoutes(newQuoteRoutes);
			});
		} catch {}
	}, []);

	return (
		<Switch>
			<Route
				exact
				path={`/reading/${slug}`}
				component={_ => <Splash post={post} text={text} quotes={quotes} />}
			/>
			{quoteRoutes}
			<Route component={Error404} />
		</Switch>
	);
};
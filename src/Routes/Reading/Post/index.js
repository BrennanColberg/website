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
				if (!quoteDatum.slug) quoteDatum.slug = i + 1;
				newQuotes.push(<Quote key={i} book={post} quote={quoteDatum} />);
				newQuoteRoutes.push(
					<Route
						key={i}
						path={`/reading/${slug}/${quoteDatum.slug}`}
						component={_ => <QuotePage book={post} quote={quoteDatum} />}
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

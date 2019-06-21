import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Splash from "./Splash";
import posts from "./posts/index.json";

export default class extends Component {
	state = {
		routes: []
	};

	// cancer markdown path loading
	componentDidMount() {
		posts.forEach(async ({ file, slug }, i) => {
			const source = await fetch(require(`./posts/${file}`));
			const text = await source.text();
			this.setState({
				routes: [
					...this.state.routes,
					<Route
						key={i}
						path={`/writing/${slug}`}
						component={() => (
							<article>
								<ReactMarkdown source={text} />
							</article>
						)}
					/>
				]
			});
		});
	}

	render() {
		return (
			<Switch>
				<Route exact path="/writing" component={Splash} />
				{this.state.routes}
				<Route component={() => <>nada</>} />
			</Switch>
		);
	}
}

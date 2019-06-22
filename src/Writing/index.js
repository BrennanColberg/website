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
		posts.forEach(async ({ file, slug, visible, published }, i) => {
			if (visible || published) {
				// get markdown text from file
				const source = await fetch(require(`./posts/${file}`));
				const text = await source.text();
				// create new route based on given slug
				const route = (
					<Route
						key={i}
						path={`/writing/${slug}`}
						component={() => (
							<article>
								<ReactMarkdown source={text} />
							</article>
						)}
					/>
				);
				// add route to render
				this.setState({
					routes: [...this.state.routes, route]
				});
			}
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

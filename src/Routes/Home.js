import React from "react";
import { Link } from "react-router-dom";

import Paren from "../Components/Paren";
import EmailLink from "../Components/EmailLink";

export default () => (
	<>
		<h1>
			My name is Brennan Colberg.{" "}
			<span className="no-bold">I'm an autodidact, among other things.</span>
		</h1>
		<p>
			Here you'll find a list of <Link to="/reading">the books I've read</Link>{" "}
			<Paren>and what I think of at least some of them</Paren>, all kinds of{" "}
			<Link to="/writing">writings on various topics</Link>, and anything else I
			deem fitting to post.
		</p>
		<p>
			It's not a pretty site, that's for sure—I've tried to keep it bare-bones
			utilitarian, meant for reading and not for thrill. Someday, if I find time
			to change it{" "}
			<Paren>and push away indecisiveness long enough to finish the task</Paren>
			, I will! Graphic design and CSS, unfortunately, are not talents with
			which I've been graced. It took a whopping twenty minutes to simply choose
			the <em>link</em> color to use on this website; more choice than that
			often results in temporary paralysis{" "}
			<Paren>and mediocre results, to boot</Paren>.
		</p>
		<p>
			Elsewhere on the Internet, you can find my code on{" "}
			<a
				href="https://github.com/BrennanColberg"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub
			</a>{" "}
			and text me on{" "}
			<a
				href="https://m.me/Brennan.D.Colberg"
				target="_blank"
				rel="noopener noreferrer"
			>
				Messenger
			</a>
			. For longer-form or formal contact, please{" "}
			<EmailLink>email me</EmailLink> instead!{" "}
			<Paren>
				Since June 12, 2019, due to a longstanding struggle with social media
				addiction, I no longer have accounts on Twitter, Reddit, Facebook
				proper, or Instagram.
			</Paren>
		</p>
	</>
);

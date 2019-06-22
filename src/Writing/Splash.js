import React from "react";
import { Link } from "react-router-dom";

import Paren from "../Paren";
import EmailLink from "../EmailLink";
import posts from "./posts/index.json";

export default () => (
	<>
		<h1>Why &amp; What I Write</h1>
		<p>
			Ideas frustrate me. I don't know if I'm alone, but I constantly have
			issues with something being <em>just</em> on the tip of my tongue—yet in
			internal thinking, not in speech. The resulting feeling is immeasurably
			infuriating; I know I'm almost at something, yet can't grasp it.
		</p>
		<p>
			The best way to get over that hump is just to write. It forces my ideas to
			come out, crystallizes them, and paints them into a full picture that I
			can easily analyze, share, and build upon. It's easier to criticize
			something or take it into context when laid out plainly; grasping and
			manipulating specific ideas—all in one's mind—is supremely taxing.{" "}
			<Paren>At least, it is to me; maybe others are different.</Paren>
		</p>
		<p>
			To think, then, I communicate. The simple act of scribbling or typing or
			discussing or explaining <em>forces</em> me to articulate vague notions
			that may be swirling around in my head. If I don't communicate what I'm
			thinking, I can't get past it—and frustration, obsession, even
			self-loathing <Paren>for my inability to make progress</Paren> end up
			stifling any other ideas from coming forth. Communication is the last step
			that clears ideas from my mind, leaves me a blank slate to start afresh—if
			I don't do it, I just stagnate.
		</p>
		<p>
			So that's why I publish all kinds of ideas here: to get them out of my
			head. At times, I imagine, my words won't make sense; they'll seem
			disconnected; or I'll embarrass myself by demonstrating shocking
			misunderstandings of elementary concepts.{" "}
			<Paren>
				My personal opinion will probably come to differ from what's published
				here, too, as time goes on and I mature.
			</Paren>{" "}
			Most ideas will seem unpolished. <Paren>Because they are.</Paren>
		</p>
		<p>
			With that said, read and take what you can from me and my thoughts!{" "}
			<EmailLink>Email me</EmailLink> if you have any questions or comments; I'd
			love to hear your feedback!
		</p>
		<ul className="articles">
			{posts.map(
				({ slug, title, subtitle, published }, i) =>
					published && (
						<li key={i}>
							<Link to={`/writing/${slug}`}>
								{title}
								{subtitle && <>: {subtitle}</>}
							</Link>
						</li>
					)
			)}
		</ul>
	</>
);

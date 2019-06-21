import "./Books.scss";

import React from "react";

import Book from "./Book";
import json from "./books";
import Paren from "../Paren";

export default () => (
	<>
		<article>
			<h1>My Reading</h1>
			<p>
				I read a lot. Since June 2018, I've finished {json.length} books–from
				novels to academic summaries, history to educational theory, classics to
				self-help books, I tend to pick up anything that piques my interest. All
				of those books are above, in chronological order of when I finished each{" "}
				<Paren>if I read something twice, it's posted twice</Paren>.
			</p>
			<p class="hidden">
				I've given each book a personal rating on a scale between -1.0 and 1.0
				based on how likely I would be to recommend it. This rating is expressed
				in each of the books' shadows; the greener a shadow is, the more I'd
				recommend it. The more red it is, the less I'd recommend it. If there's
				no shadow, I haven't coded an opinion in for that book yet.
			</p>
			<div className="books">
				{json
					.sort((a, b) => a.date < b.date) // descending chronological order
					.map(book => (
						<Book book={book} />
					))}
			</div>
			<p>
				If you're interested in chatting about any of these books{" "}
				<Paren>
					whether from personal curiosity, wanting to hear my take on them, or
					wanting to chat in more depth
				</Paren>
				, then <a href="mailto:brennan.colberg@gmail.com">shoot me an email!</a>{" "}
				I'll respond as fast as I can.
			</p>
		</article>
	</>
);

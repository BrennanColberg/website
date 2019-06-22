import React from "react";

import Book from "./Book";
import Paren from "../Paren";
import EmailLink from "../EmailLink";

import uniqueBooks from "./books";
const books = [];
uniqueBooks.forEach(book =>
	// splits each book into multiple books, one for each date
	// that it was read, and recombines them into one array
	book.dates.forEach(date => {
		const singleBook = Object.assign({}, book);
		delete singleBook.dates;
		singleBook.date = date;
		books.push(singleBook);
	})
);

export default () => (
	<>
		<h1>My Reading</h1>
		<p>
			I read a lot. Since June 2018, I've finished {uniqueBooks.length}{" "}
			different books–from novels to academic summaries, history to educational
			theory, classics to self-help books, I tend to pick up anything that
			piques my interest. All {books.length} reads{" "}
			<Paren>I've read some multiple times</Paren> are listed below, in
			chronological order <Paren>most recent first</Paren>.
		</p>
		<p className="hidden">
			I've given each book a personal rating on a scale between -1.0 and 1.0
			based on how likely I would be to recommend it. This rating is expressed
			in each of the books' shadows; the greener a shadow is, the more I'd
			recommend it. The more red it is, the less I'd recommend it. If there's no
			shadow, I haven't coded an opinion in for that book yet.
		</p>
		<div className="books">
			{books
				// descending chronological order of most recent read
				.sort((a, b) => a.date < b.date)
				.map((book, i) => (
					<Book key={i} book={book} />
				))}
		</div>
		<p>
			If you're interested in chatting about any of these books{" "}
			<Paren>
				whether from personal curiosity, wanting to hear my take on them, or
				just wanting to talk in more depth
			</Paren>
			, feel free to <EmailLink>shoot me an email!</EmailLink> I'll respond as
			fast as I can.
		</p>
	</>
);

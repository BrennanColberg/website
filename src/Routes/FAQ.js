import React from "react";

import Paren from "../Components/Paren";

export default () => (
	<>
		<h1>FAQ</h1>
		<h3>What makes you interested in education?</h3>
		<p>
			When I was 15, I was incredibly frustrated with the high school system.
			Being in a top school, moreover, I felt shocked that <em>this</em> was all
			we humans had come up with so far. From there, I started reading, writing,
			and thinking deeply about what needs to be done.
		</p>
		<h3>What makes you interested in computer science?</h3>
		<p>
			I love systems, abstractions, and the way they interact. Additionally,
			there's something enchanting about the ability to individually make
			something that can impact the world with merely your mind and fingers.
			Data visualization is an especially amazing part of that, in my opinion!
		</p>
		<p>
			In the coming years, much of the world's power will become centralized
			around those who can weild technology effectively. It's fun, albeit
			frightening, to be on top of this transformation and watch it from within.
		</p>
		<h3>
			How much <em>do</em> you read?
		</h3>
		<p>
			I read and manually copy ~5-8 pages worth of key excerpts from each of
			approximately 10 books per month <Paren>120 per year</Paren>.
			{/* A list of the books I've recently read and processed is <a href="#reading">here</a> */}
		</p>
		<h3>What's your life plan?</h3>
		<p>
			I am figuring out how to create a centralized school system separate from
			the public/governmental one, which can rapidly iterate by scientifically
			testing theories and methods to optimize for student satisfaction and
			growth{" "}
			<Paren>
				<strong>not</strong> standardized test scores
			</Paren>
			.
		</p>
		<p>
			Most educational innovation that I see from the tech world consists in
			attempts to completetly replace physical schools with online software; I
			do not believe this to be the correct course. School redesigns, in my
			view, should revolve around first redefining the roles of teachers and
			students in the classroom, and then seeing how technology can aid that
			transformation{" "}
			<Paren>
				as opposed to creating technology and shoehorning it in whether helpful
				or not
			</Paren>
			.
		</p>
		<h3>Where are you?</h3>
		<p>
			I live in Lake Forest Park, WA <Paren>a suburb of Seattle</Paren>.
		</p>
	</>
);

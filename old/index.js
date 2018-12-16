/**	This JavaScript file loads all content into the HTML pages on which it is
 *	linked; it queries various JSON files stored in this same directory and
 *	interprets them in order to populate various categories of data.
 *
 *	Why do it like this, you may ask?
 *		I do it in order to easily update information and content; with this
 *		method, I need only change one file to have its content (be it a list
 *		of projects, blog posts, contact info, or a menu) distributed throughout
 *		my entire website in updated form. It takes a small delay, but the
 *		development convenience far outweighs this.
 */

"use strict";
(function () {

	// shortcuts to manipulate DOM elements more easily
	function $(id) {
		return document.getElementById(id);
	}

	function ce(tag) {
		return document.createElement(tag);
	}

	// DOM elements representing project writeups
	let projectDOMs = [];
	// holds programming languages that are whitelisted to be shown
	// (empty = show everything)
	let languageFilter = [];

	window.addEventListener("load", function () {

		if ($("projects")) {
			let children = $("projects").children;
			for (let i = 0; i < children.length; i++) {
				projectDOMs.push(children[i]);
			}
			// reformats the display of the projects as the window resizes
			window.addEventListener("resize", showProjects);
			// formats the projects
			showProjects();
		}

	});

	// puts the project DOM elements inside column divs within the #projects
	// display, depending on the window width. Easy to call to reformat the
	// way these are displayed based on changing width!
	function showProjects() {

		let div = $("projects");
		let width = div.offsetWidth;
		let cols = [];
		let colHeights = [];

		console.log("initial check");
		console.log(projectDOMs);
		console.log(cols);

		// clears project div DOM
		while (div.firstChild)
			div.removeChild(div.firstChild);

		// creates the maximum amount of columns to fill the avaialble width
		// without overflow
		for (let i = 0; 260 * (i + 1) < width; i++) {
			cols[i] = ce("div");
			cols[i].className = i;
			div.appendChild(cols[i]);
			colHeights[i] = 0;
		}
		console.log(cols);
		console.log(cols.length);
		console.log(div.childElementCount);

		console.log("post-col check");
		console.log(projectDOMs);
		console.log(cols);

		// applies filter if there's anything in the filter, otherwise let
		// everything through
		let showableDOMs = undefined;
		if (languageFilter.length) {
			console.log("filtering");
			showableDOMs = [];
			for (let f = 0; f < languageFilter.length; f++) {
				let language = languageFilter[f];
				for (let p = 0; p < projectDOMs.length; p++) {
					let project = projectDOMs[p];
					if (project.classList.contains(language)) {
						showableDOMs.push(project);
					}
				}
			}
		} else {
			console.log("not filtered");
			showableDOMs = projectDOMs;
		}

		// distributes projects to columns iteratively
		for (let i = 0; i < showableDOMs.length; i++) {

			// iterates through each column to find the shortest one
			// this is imperfect due to margins, I think (but maybe
			// using offsetHeight lower down fixes that)
			let selectedIndex = undefined;
			for (let h = 0; h < cols.length; h++) {
				if (selectedIndex === undefined ||
					colHeights[h] < colHeights[selectedIndex]) {
					selectedIndex = h;
				}
			}

			// add DOM to view and record height (perhaps I could read
			// simple DOM height of column constantly to make more
			// efficient in the future)
			cols[selectedIndex].appendChild(showableDOMs[i]);
			colHeights[selectedIndex] += showableDOMs[i].offsetHeight;

		}
	}

	// called by a DOM element representing a programming language, this
	// method toggles that language's present on a filter that determines
	// which projects may be shown, then refreshes the project display
	function toggleFilteredLanguage() {
		let language = this.classList[0];
		let index = languageFilter.indexOf(language);
		if (index == -1) {
			languageFilter.push(language);
			this.classList.add("selected");
		} else {
			languageFilter.splice(index, 1);
			this.classList.remove("selected");
		}
		showProjects();
	}

})();

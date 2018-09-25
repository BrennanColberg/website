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
(function() {
	
	
	// shortcuts to manipulate DOM elements more easily
	function $(id) { return document.getElementById(id); }
	function ce(tag) { return document.createElement(tag); }
	// generic AJAX GET method, adapted from my code hosted online at
	// https://brennancolberg.github.io/abbr/js/ajax.js
	function ajaxGET(url, onSuccess) {
		fetch(url, { credentials: "include" })
			.then(function(r) { 
				if (r.status >= 200 && r.status < 300) {
					return r.text();
				}
			})
			.then(onSuccess)
			.catch(function(e) { 
				console.log(e);
			});
	}
	
	// DOM elements representing project writeups
	let projectDOMs = [];
	// holds programming languages that are whitelisted to be shown
	// (empty = show everything)
	let languageFilter = [];
	
	window.addEventListener("load", function() {
		
		// only queries for each file if there's an object to put it in
		if ($("projects")) {
			ajaxGET("../projects/languages.json", loadProjectLanguages);
			// reformats the display of the projects as the window resizes
			window.addEventListener("resize", showProjects);
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
		
		cols[0] = ce("div");
		colHeights[0] = 0;
		// creates the maximum amount of columns to fill the avaialble width
		// without overflow
		while ((cols.length + 1) * 260 < width) {
			cols[cols.length] = ce("div");
			colHeights[cols.length] = 0;
		}
		
		// chears projects div, then attaches columns to the projects div
		// to replace the old elements
		while (div.firstChild)
			div.removeChild(div.firstChild);
		for (let i = 0; i < cols.length; i++)
			div.appendChild(cols[i]);
		
		// applies filter if there's anything in the filter, otherwise let
		// everything through
		let showableDOMs = undefined;
		if (languageFilter.length) {
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
			showableDOMs = projectDOMs;
		}
		
		// distributes projects to columns iteratively
		for (let i = 0; i < showableDOMs.length; i++) {

			// iterates through each column to find the shortest one
			// this is imperfect due to margins, I think (but maybe
			// using offsetHeight lower down fixes that)
			let selectedIndex = undefined;
			for (let h = 0; h < cols.length; h++) {
				if (selectedIndex === undefined
					|| colHeights[h] < colHeights[selectedIndex]) {
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
	
	// queries for the languages if there's a project file, in order to
	// create CSS rules to color each project according to the language
	// in which it was programmed (matching GitHub conventions on these
	// language-specific colors). Also, if there's a div for it, creates
	// a key for the colors!
	function loadProjectLanguages(json) {
		let data = JSON.parse(json);
		let languages = Object.keys(data);

		// adds custom CSS to the document's <head> to link each
		// language (as a class) with its color (specifically, sets
		// both background and border to be that color)
		let css = "";
		for (let i = 0; i < languages.length; i++) {
			let language = data[languages[i]];
			let rgb = language.rgba;
			let colorString = rgb[0] + ", " + rgb[1] + ", " + rgb[2];
			css += "." + languages[i] + " {\n";
			// border-color set
			css += "\tborder-color: rgb(" + colorString + ");\n";
			// background-color set
			css += "\tbackground-color: rgba(" + colorString + ", " + rgb[3] + ");\n";
			css += "}\n";
		}
		let style = ce("style");
		style.rel = "stylesheet";
		style.innerHTML = css;
		document.querySelector("head").prepend(style);

		// if there's a div for it, puts a colored key so that the user
		// knows which color links with which language!
		if ($("project-languages")) {
			let div = $("project-languages");
			for (let i = 0; i < languages.length; i++) {
				let p = ce("h4");
				p.textContent = data[languages[i]].name;
				p.className = languages[i];
				p.onclick = toggleFilteredLanguage;
				div.appendChild(p);
			}
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
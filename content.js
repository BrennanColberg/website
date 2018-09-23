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
			ajaxGET("../projects/projects.json", loadProjects);
			ajaxGET("../projects/languages.json", loadProjectLanguages);
			// reformats the display of the projects as the window resizes
			window.addEventListener("resize", showProjects);
		}
		if ($("blog")) ajaxGET("../blog/blog.json", loadBlog);
		if ($("menu")) ajaxGET("../menu.json", loadMenu);
		if ($("contact")) ajaxGET("../contact.json", loadContact);
		
	});
	
	// populates "projects" DOM element with various <article> elements,
	// each of which has a title, some links, and a description of the
	// projects. Also gives it a class related to the language each project
	// was programmed in, which changes its color in the CSS!
	function loadProjects(json) {
		let div = $("projects");
		let projects = JSON.parse(json);
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i];
			// creates new DOM element
			let article = ce("article");
			// conditionally adds a colored border if a language is
			// set, to show the language
			if (project["language"]) {
				article.classList.add(project["language"]);
			}
			// parses and adds title in <h2> form
			if (project["title"]) {
				let titleSection = ce("section");
				titleSection.className = "title";
				let title = ce("h2");
				title.textContent = project["title"];
				titleSection.appendChild(title);
				article.appendChild(titleSection);
			}
			// adds links within a specific <section>
			if (project["links"]) {
				let linkSection = ce("section");
				linkSection.className = "link";
				for (let l = 0; l < project["links"].length; l++) {
					let p = ce("p");
					let a = ce("a");
					a.textContent = project["links"][l].text;
					a.href = project["links"][l].href;
					a.target = "_blank";
					p.appendChild(a);
					linkSection.appendChild(p);
				}
				article.appendChild(linkSection);
			}
			// adds description within a <p> element
			if (project["description"]) {
				let textSection = ce("section");
				textSection.className = "text";
				let text = ce("p");
				text.textContent = project["description"];
				textSection.appendChild(text);
				article.appendChild(textSection);
			}
			// adds the new DOM to the list of these
			projectDOMs.push(article);
		}
		// displays the DOMs dynamically
		showProjects();
	}
	
	// puts the project DOM elements inside column divs within the #projects
	// display, depending on the window width. Easy to call to reformat the
	// way these are displayed based on changing width!
	function showProjects() {
		let div = $("projects");
		let width = div.offsetWidth;
		let cols = [];
		cols[0] = ce("div");
		let colHeights = [0];
		// creates the maximum amount of columns to fill the avaialble width
		// without overflow
		while ((cols.length + 1) * 260 < width) {
			cols[cols.length] = ce("div");
			colHeights[cols.length] = 0;
		}
		// chears projects div, thenn attaches columns to the projects div
		// to replace the old elements
		while (div.firstChild)
			div.removeChild(div.firstChild);
		for (let i = 0; i < cols.length; i++)
			div.appendChild(cols[i]);
		// distributes projects to columns iteratively
		for (let i = 0, c = 0; i < projectDOMs.length; i++) {
			let valid = true;
			// filter implementation!
			// filter only does something if it's not empty; empty filter
			// shows everything!
			if (languageFilter.length) {
				valid = false;
				let project = projectDOMs[i];
				for (let l = 0; l < languageFilter.length; l++) {
					if (project.classList.contains(languageFilter[l])) {
						valid = true;
						break;
					}
				}
			}
//			// needing "valid" allows for filter to remove elements
//			// "c" variable is a separate increment from "i" because
//			// there may be elements considered by "i" that do not end up
//			// displayed to screen... hence, "c" keeps distribution even
//			if (valid) cols[c++ % cols.length].appendChild(projectDOMs[i]);
			if (valid) {
				let selectedIndex = undefined;
				for (let h = 0; h < cols.length; h++) {
					if (selectedIndex === undefined
						|| colHeights[h] < colHeights[selectedIndex]) {
						selectedIndex = h;
					}
				}
				cols[selectedIndex].appendChild(projectDOMs[i]);
				colHeights[selectedIndex] += projectDOMs[i].offsetHeight;
			}
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
	
	// populates "blog" DOM element with various <article> elements, in a
	// manner extremely similar to the "projects" section. No coloring.
	function loadBlog(json) {
		let data = JSON.parse(json);
		for (let i = 0; i < data.length; i++) {
			let post = data[i];
			// creates <article> element
			let article = ce("article");
			// loads title (<h2>) and subtitle (<h4>)
			let titleSection = ce("section");
			titleSection.className = "title";
			if (post["title"]) {
				let title = ce("h2");
				title.textContent = post["title"];
				titleSection.appendChild(title);
			}
			if (post["subtitle"]) {
				let subtitle = ce("h4");
				subtitle.textContent = post["subtitle"];
				titleSection.appendChild(subtitle);
			}
			if (titleSection.childElementCount > 0) {
				// only adds if there's either a title or subtitle
				article.appendChild(titleSection);
			}
			// adds each paragraph as a <p>, all to one <section>
			if (post["paragraphs"]) {
				let textSection = ce("section");
				textSection.className = "text";
				for (let l = 0; l < post["paragraphs"].length; l++) {
					let p = ce("p");
					p.textContent = post["paragraphs"][l];
					textSection.appendChild(p);
				}
				article.appendChild(textSection);
			}
			// adds a link to continue reading
			// this will eventually lead to its own page!
			if (post["link"]) {
				let linkSection = ce("section");
				linkSection.className = "link";
				let link = ce("a");
				link.href = post["link"];
				link.textContent = "[read more]";
				linkSection.appendChild(link);
				article.appendChild(linkSection);
			}
			// adds composed <article> to DOM element
			$("blog").appendChild(article);
		}
	}
	
	// populates "menu" DOM element with a constant site-wide navigation
	function loadMenu(json) {
		let data = JSON.parse(json);
		for (let i = 0; i < data.length; i++) {
			// creates an <a> within a <p> for each menu item
			let p = ce("p");
			let a = ce("a");
			a.textContent = data[i]["text"];
			a.href = data[i]["href"];
			p.appendChild(a);
			// adds each menu item directly to the parent DOM
			$("menu").appendChild(p);
		}
	}
	
	// populates footer with links to social media and contact information
	function loadContact(json) {
		let data = JSON.parse(json);
		for (let i = 0; i < data.length; i++) {
			// <a> within <p> for each individual option
			let p = ce("p");
			let a = ce("a");
			a.textContent = data[i]["text"];
			a.href = data[i]["href"];
			a.target = "_blank"; // opens each link in new tab!
			p.appendChild(a);
			// adds each option to parent DOM individually
			$("contact").appendChild(p);
		}
	}
	
})();
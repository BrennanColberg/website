"use strict";
(function() {
	
	function $(id) { return document.getElementById(id); }
	function ce(tag) { return document.createElement(tag); }
	
	window.addEventListener("load", function() {
		
		// ajax code gotten from CSE 154, hosted on personal repository
		if ($("projects")) {
			ajaxGET("projects.json", function(json) {
				let div = $("projects");
				let data = JSON.parse(json);
				for (let i = 0; i < data.length; i++) {

					let datum = data[i];
					let project = ce("article");

					// title
					if (datum["title"]) {
						let titleSection = ce("section");
						titleSection.className = "title";
						let title = ce("h2");
						title.textContent = datum["title"];
						titleSection.appendChild(title);
						project.appendChild(titleSection);
					}

					// links
					if (datum["links"]) {
						let linkSection = ce("section");
						linkSection.className = "link";
						for (let l = 0; l < datum["links"].length; l++) {
							let p = ce("p");
							let a = ce("a");
							a.textContent = datum["links"][l].text;
							a.href = datum["links"][l].href;
							a.target = "_blank";
							p.appendChild(a);
							linkSection.appendChild(p);
						}
						project.appendChild(linkSection);
					}

					// description
					if (datum["description"]) {
						let descriptionSection = ce("section");
						descriptionSection.className = "description";
						let description = ce("p");
						description.textContent = datum["description"];
						descriptionSection.appendChild(description);
						project.appendChild(descriptionSection);
					}

					div.appendChild(project);

				}
			});
		}
		
		if ($("blog")) {
			ajaxGET("blog.json", function(json) {
				let data = JSON.parse(json);
				for (let i = 0; i < data.length; i++) {

					let datum = data[i];
					let post = ce("article");

					// title
					let titleSection = ce("section");
					titleSection.className = "title";
					if (datum["title"]) {
						let title = ce("h2");
						title.textContent = datum["title"];
						titleSection.appendChild(title);
					}
					if (datum["subtitle"]) {
						let subtitle = ce("h4");
						subtitle.textContent = datum["subtitle"];
						titleSection.appendChild(subtitle);
					}
					if (titleSection.childElementCount > 0) {
						post.appendChild(titleSection);
					}

					// links
					if (datum["paragraphs"]) {
						let paragraphSection = ce("section");
						paragraphSection.className = "paragraphs";
						for (let l = 0; l < datum["paragraphs"].length; l++) {
							let p = ce("p");
							p.textContent = datum["paragraphs"][l];
							paragraphSection.appendChild(p);
						}
						post.appendChild(paragraphSection);
					}

					// description
					if (datum["link"]) {
						let linkSection = ce("section");
						linkSection.className = "link";
						let link = ce("a");
						link.href = datum["link"];
						link.textContent = "[... read more ...]";
						linkSection.appendChild(link);
						post.appendChild(linkSection);
					}

					$("blog").appendChild(post);

				}
			});
		}
		
		if ($("menu")) {
			ajaxGET("menu.json", function(json) {
				let data = JSON.parse(json);
				for (let i = 0; i < data.length; i++) {
					let p = ce("p");
					let a = ce("a");
					a.textContent = data[i]["text"];
					a.href = data[i]["href"];
					p.appendChild(a);
					$("menu").appendChild(p);
				}
			});
		}
		
		if ($("contact")) {
			ajaxGET("contact.json", function(json) {
				let data = JSON.parse(json);
				for (let i = 0; i < data.length; i++) {
					let p = ce("p");
					let a = ce("a");
					a.textContent = data[i]["text"];
					a.href = data[i]["href"];
					a.target = "_blank";
					p.appendChild(a);
					$("contact").appendChild(p);
				}
			});
		}
		
		if ($("introduction")) {
			ajaxGET("introduction.html", function(html) {
				$("introduction").innerHTML = html;
			});
		}
		
	});
	
})();
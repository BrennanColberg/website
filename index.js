"use strict";
(function() {
	
	function $(id) { return document.getElementById(id); }
	function ce(tag) { return document.createElement(tag); }
	
	window.addEventListener("load", function() {
		// ajax code gotten from CSE 154, hosted on personal repository
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
					let title = ce("h3");
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
		ajaxGET("blog.json", function() {
			
		});
	});
	
})();
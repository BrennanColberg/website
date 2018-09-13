"use strict";
(function() {
	
	function $(id) { return document.getElementById(id); }
	function ce(tag) { return document.createElement(tag); }
	
	window.addEventListener("load", function() {
		
		// ajax code gotten from CSE 154, hosted on personal repository
		if ($("projects")) {
			ajaxGET("projects.json", function(json) {
				let div = $("projects");
				let projects = JSON.parse(json);
				for (let i = 0; i < projects.length; i++) {
					

					let project = projects[i];
					let article = ce("article");

					// title
					if (project["title"]) {
						let titleSection = ce("section");
						titleSection.className = "title";
						let title = ce("h2");
						title.textContent = project["title"];
						titleSection.appendChild(title);
						article.appendChild(titleSection);
					}

					// links
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

					// description
					if (project["description"]) {
						let textSection = ce("section");
						textSection.className = "text";
						let text = ce("p");
						text.textContent = project["description"];
						textSection.appendChild(text);
						article.appendChild(textSection);
					}
					
					if (project["language"]) {
						article.classList.add("bordered");
						article.classList.add(project["language"]);
					}

					div.appendChild(article);

				}
			});
		}
		
		
		if ($("blog")) {
			ajaxGET("blog.json", function(json) {
				let data = JSON.parse(json);
				for (let i = 0; i < data.length; i++) {

					let project = data[i];
					let post = ce("article");

					// title
					let titleSection = ce("section");
					titleSection.className = "title";
					if (project["title"]) {
						let title = ce("h2");
						title.textContent = project["title"];
						titleSection.appendChild(title);
					}
					if (project["subtitle"]) {
						let subtitle = ce("h4");
						subtitle.textContent = project["subtitle"];
						titleSection.appendChild(subtitle);
					}
					if (titleSection.childElementCount > 0) {
						post.appendChild(titleSection);
					}

					// links
					if (project["paragraphs"]) {
						let textSection = ce("section");
						textSection.className = "text";
						for (let l = 0; l < project["paragraphs"].length; l++) {
							let p = ce("p");
							p.textContent = project["paragraphs"][l];
							textSection.appendChild(p);
						}
						post.appendChild(textSection);
					}

					// description
					if (project["link"]) {
						let linkSection = ce("section");
						linkSection.className = "link";
						let link = ce("a");
						link.href = project["link"];
						link.textContent = "[read more]";
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
		
		if ($("attribution")) {
			$("attribution").onclick = attributionPopup;
		}
		
		if ($("collaboration")) {
			$("collaboration").onclick = collaborationPopup;
		}
		
	});
	
	function attributionPopup() {
		ajaxGET("attribution.txt", alertText);
	}
	
	function collaborationPopup() {
		ajaxGET("collaboration.txt", alertText);
	}
	
	function alertText(txt) {
		alert(txt);
	}
	
})();
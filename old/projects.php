<div id="projects" class="feed">
	<?php
	
	# loads file "projects.json"
	$file = file_get_contents("data/projects.json");
	$json = json_decode($file, true);
	
	# loads each project individually
	foreach ($json as $project) {
		
		# if a language is defined, then add set its name as the class 
		$classes = "";
		if ($project["language"]) {
			$classes = $project["language"];
		}
		
		# create project article in general
		echo("<article class='$classes'>");
		
		# add a title to the article if defined
		if ($project["title"]) {
			$title = $project["title"];
			echo("<section class='title'>");
			echo("<h3>$title</h3>");
			echo("</section>");
		}
		
		# add links to the article if defined
		if ($project["links"]) {
			echo("<section class='link'>");
			# each link is added to a section separately, in <p> elements
			# so that they are not inline and clumping
			foreach ($project["links"] as $link) {
				$text = $link["text"];
				$href = $link["href"];
				echo("<p><a target='_blank' href='$href'>$text</a></p>");
			}
			echo("</section>");
		}
		
		# adds description to the article if defined
		if ($project["description"]) {
			$description = $project["description"];
			echo("<section class='text'>");
			echo("<p>$description</p>");
			echo("</section>");
		}
		
		# ends the general project article, ready for next one
		echo("</article>");
		
	}
	
	?>
</div>

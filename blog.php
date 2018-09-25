<div id="projects" class="feed">
	<?php
	
	$file = file_get_contents("data/blog.json");
	$json = json_decode($file, true);
	
	foreach ($json as $project) {
		
		$classes = "";
		if ($project["language"]) {
			$classes = $project["language"];
		}
		echo("<article class='$classes'>");
		
		if ($project["title"] || $project["subtitle"]) {
			echo("<section class='title'>");
			if ($project["title"]) {
				$title = $project["title"];
				echo("<h3>$title</h3>");
			}
			if ($project["subtitle"]) {
				$subtitle = $project["subtitle"];
				echo("<h4>$subtitle</h4>");
			}
			echo("</section>");
		}
		
		if ($project["paragraphs"]) {
			echo("<section class='text'>");
			foreach ($project["paragraphs"] as $paragraph) {
				echo("<p>$paragraph</p>");
			}
			echo("</section>");
		}
		
		if ($project["link"]) {
			$href = $link["link"]["href"];
			echo("<section class='link'>");
			echo("<a target='_blank' href='$href'>[read more]</a>");
			echo("</section>");
		}
		
		echo("</article>");
	}
	
	?>
</div>
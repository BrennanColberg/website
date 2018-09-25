<div id="projects" class="feed">
	<?php
	
	$file = file_get_contents("data/projects.json");
	$json = json_decode($file, true);
	
	foreach ($json as $project) {
		
		$classes = "";
		if ($project["language"]) {
			$classes = $project["language"];
		}
		
		echo("<article class='$classes'>");
		
		if ($project["title"]) {
			$title = $project["title"];
			echo("<section class='title'>");
			echo("<h3>$title</h3>");
			echo("</section>");
		}
		
		if ($project["links"]) {
			echo("<section class='link'>");
			foreach ($project["links"] as $link) {
				$text = $link["text"];
				$href = $link["href"];
				echo("<p><a target='_blank' href='$href'>$text</a></p>");
			}
			echo("</section>");
		}
		
		if ($project["description"]) {
			$description = $project["description"];
			echo("<section class='text'>");
			echo("<p>$description</p>");
			echo("</section>");
		}
		
		echo("</article>");
	}
	
	?>
</div>
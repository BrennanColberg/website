<div id="blog" class="feed">
	<?php
	
	# loads file "blog.json"
	$file = file_get_contents("data/blog.json");
	$json = json_decode($file, true);
	
	# loads each blog post separately
	foreach ($json as $blog_post) {
		
		# create general blog post article
		echo("<article>");
		
		# if there's a title or subtitle, create a section for them then
		# put each one (at least one must create something) inside it!
		if ($blog_post["title"] || $blog_post["subtitle"]) {
			echo("<section class='title'>");
			# add a title if defined
			if ($blog_post["title"]) {
				$title = $blog_post["title"];
				echo("<h3>$title</h3>");
			}
			# add a subtitle if defined
			if ($blog_post["subtitle"]) {
				$subtitle = $blog_post["subtitle"];
				echo("<h4>$subtitle</h4>");
			}
			echo("</section>");
		}
		
		# add each paragraph of a blog post in succession
		if ($blog_post["paragraphs"]) {
			echo("<section class='text'>");
			foreach ($blog_post["paragraphs"] as $paragraph) {
				echo("<p>$paragraph</p>");
			}
			echo("</section>");
		}
		
		# add an optional "read more" link at the end of the blog preview
		if ($blog_post["link"]) {
			$href = $link["link"]["href"];
			echo("<section class='link'>");
			echo("<a target='_blank' href='$href'>[read more]</a>");
			echo("</section>");
		}
		
		# close out the post article, prepare for next one
		echo("</article>");
		
	}
	
	?>
</div>
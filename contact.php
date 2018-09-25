<div id="contact">
	<?php
	
	$file = file_get_contents("data/contact.json");
	$json = json_decode($file, true);
	
	foreach ($json as $contact_method) {
		$text = $contact_method["text"];
		$href = $contact_method["href"];
		echo("<p><a target='_blank' href='$href'>$text</a></p>");
	}
	
	?>
</div>
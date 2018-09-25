<div id="contact">
	<?php
	
	# loads file "contact.json"
	$file = file_get_contents("data/contact.json");
	$json = json_decode($file, true);
	
	# puts each contact link inside an <a> inside a <p> in the contact div
	# each link opens a new tab when clicked (target="_blank")
	foreach ($json as $contact_method) {
		$text = $contact_method["text"];
		$href = $contact_method["href"];
		echo("<p><a target='_blank' href='$href'>$text</a></p>");
	}
	
	?>
</div>
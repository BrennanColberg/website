<div id="project-languages">
	<?php
	
	# loads file "project-languages.json"
	$file = file_get_contents("data/languages.json");
	$json = json_decode($file, true);
	
	# displays a cute little rounded button for each language
	$language_names = array_keys($json);
	for ($i = 0; $i < count($language_names); $i++) {
		$language = $language_names[$i];
		$display_name = $json[$language]["name"];
		echo("<h4 class='$language'>$display_name</h4>");
	}
	
	?>
</div>
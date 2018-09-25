<nav id="menu">
	<?php
	
	$file = file_get_contents("data/menu.json");
	$json = json_decode($file, true);
	
	foreach ($json as $menu_item) {
		$text = $menu_item["text"];
		$href = $menu_item["href"];
		echo("<p><a href='$href'>$text</a></p>");
	}
	
	?>
</nav>
<nav id="menu">
	<?php
	
	# loads file "menu.json"
	$file = file_get_contents("data/menu.json");
	$json = json_decode($file, true);
	
	# puts each link encoded in the JSON inside an <a> inside a <p> in the nav
	foreach ($json as $menu_item) {
		$text = $menu_item["text"];
		$href = $menu_item["href"];
		echo("<p><a href='$href'>$text</a></p>");
	}
	
	?>
</nav>
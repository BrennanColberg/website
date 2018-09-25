<?php

# this PHP file acts as a CSS file
header("Content-type: text/css");

# loads file "languages.json"
$file = file_get_contents("data/languages.json");
$json = json_decode($file, true);

# sets a rule for each language: to set the border-color and background-color
# of elements that have it a class to the designated matching color
$language_names = array_keys($json);
for ($i = 0; $i < count($language_names); $i++) {
	# defining variables
	$language = $language_names[$i];
	$r = $json[$language]["color"][0];
	$g = $json[$language]["color"][1];
	$b = $json[$language]["color"][2];
	$a = 0.15;
	# output the CSS
	echo(".$language {\n");
	echo("	border-color: rgb($r, $g, $b);\n");
	echo("	background-color: rgba($r, $g, $b, $a);\n");
	echo("}\n\n");
}

?>
<!DOCTYPE html>
<html lang="en">
	
	<head>
		<title>Brennan Colberg</title>
		<link href="../style.css" rel="stylesheet" />
		<script src="../index.js"></script>
	</head>

	<body id="page-home">
		
		<!-- body header (with my name!) -->
		<header>
			<h1>Brennan Colberg</h1>
			<?php include("menu.php"); ?>
		</header>
		
		<p id="introduction">
			<strong>Hello, my name is Brennan!</strong> Welcome to my website; this is the second website I've made (the first one was for <a href="https://frc3268.github.io" target="_blank">my robotics team</a>). I'm a first-year Computer Science student at the University of Washington in Seattle. I program a lot in my spare time -- look at the projects down below! I want to start posting blogs as well, soon -- look at the placeholder blog area down below too!
		</p>
		
		<h2>Personal Projects</h2>
		<?php include("projects.php"); ?>
		
		<footer>
			<?php include("contact.php"); ?>
			<p>&copy; Brennan Colberg 2018</p>
		</footer>
		
	</body>
</html>
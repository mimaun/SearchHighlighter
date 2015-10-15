<?php
function curPageURL() {
 $pageURL = 'http';
 if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
 $pageURL .= "://";
 if ($_SERVER["SERVER_PORT"] != "80") {
  $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
 } else {
  $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
 }
 return $pageURL;
}
?>

<!DOCTYPE html>   <!-- Solution by Claude Anderson and (your name here) -->
<html>
<head>
	<title> search highlighter </title>
<?php
	if (isset($_GET["file"])) {
?>
	<link href="highlight.css" rel="stylesheet">
	<script src="highlight.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<?php
	}
?>
    <meta chartype="utf-8" />
</head>
<body>
	
<?php
	chdir("Files");
	$files = glob("*.txt");
	if (!isset($_GET["file"])) { #display the form
?>
		<h1> search highlighter </h1>
		<form action="<?=curPageURL()?>">
			
			<select name="file">
<?php
			foreach($files as $file) {
				$file_name = substr($file, 0, strlen($file) - 4);
?>
				<option value="<?="$file"?>">
				   <?=$file_name?>
				</option>
<?php   } ?>
				</select> Choose a file <br />
				<input type="submit" value="Choose" />
		</form>
<?php
	} else {  # has the two expected parameters, find and display matches
?>
	    <h1> Click a word </h1>
		
		<div id="alltext">

<?php

		$file_lines = file($_GET["file"]);  # array of lines from the file.
		foreach($file_lines as $line) { 
			print "<p>$line&nbsp;</p>\n";
		}		
	}
?>

	</div>

</body>
</html>

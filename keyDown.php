<?php

	$urls = 'http://textshare.lo/';
 $keyCode = $_GET['keycode'];
 $filename = $_GET['filename'];

 $stringtext = file_get_contents('file/'.$filename.'.txt');
 $stringtext = $stringtext.$keyCode;
 file_put_contents('file/'.$filename.'.txt', $stringtext);
	// print_r($keyCode);
	echo $stringtext;
?>
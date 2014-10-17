<?php
	$text = $_POST['text'];
	$filename = $_POST['filename'];

	if( is_file('file2/'.$filename) ){
		file_put_contents('file2/'.$filename, $text);
	}
	echo file_get_contents('file2/'.$filename);;

?>
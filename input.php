<?php
	$filenumber = 'file'.$_POST['filenumber'].'/';
	$text = $_POST['text'];
	$filename = $_POST['filename'];

	if( is_file($filenumber.$filename) ){
		file_put_contents($filenumber.$filename, $text);
		echo file_get_contents($filenumber.$filename);
	}else{
		echo 'there is no such file';
	}


?>
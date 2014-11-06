<?php
	$filenumber = 'file'.$_POST['filenumber'].'/';
	$filename = $_POST['filename'];

	if( is_file($filenumber.$filename) ){
		echo file_get_contents($filenumber.$filename);
	}else{
		echo 'there is no such file';
	}
	
?>
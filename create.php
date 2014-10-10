<?php
$filename = $_POST['filename'];

touch('file/'.$filename);

header("HTTP/1.1 301 Moved Permanently");
$url = 'access?'.'filename='.$filename;
header("Location: ".$url);

?>
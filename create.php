<?php
$name = $_POST['filename'];

touch('file/'.$name.'.txt');

header("HTTP/1.1 301 Moved Permanently");
$url = 'access?'.'name='.$name;
header("Location: ".$url);
?>
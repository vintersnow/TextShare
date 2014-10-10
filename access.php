<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<?php
	$filename = $_GET['filename'];
?>

<script type="text/javascript">

<?php if( is_file('file/'.$filename) ): ?>
	var filename = <?php echo '\''.$filename.'\''; ?>;
	var stringcode = <?php echo '"'.file_get_contents('file/'.$filename).'"'; ?>;
<?php else: ?>
	var stringcode = 'file don\'t exists!';
<?php endif ?>

</script>

<script src="/javascripts/httpRequest.js" type="text/javascript" charset="utf-8" async defer></script>

	<title>My Title</title>

</head>

<body>

	<h1><?php echo $filename; ?></h1>

	<canvas id="view" width=1280px height=360px></canvas>



</body>
</html>

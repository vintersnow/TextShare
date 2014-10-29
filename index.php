<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="/javascripts/httpRequest.js" type="text/javascript" charset="utf-8" async defer></script>
<!-- <script type="text/javascript" src="openwysiwyg/scripts/wysiwyg.js"></script> -->
<!-- <script type="text/javascript" src="openwysiwyg/scripts/wysiwyg-settings.js"></script> -->
  <script type="text/javascript">
    // Use it to attach the editor to all textareas with full featured setup
    //WYSIWYG.attach('all', full);

    // Use it to attach the editor directly to a defined textarea
    WYSIWYG.attach('textarea1'); // default setup
    WYSIWYG.attach('textarea2', full); // full featured setup
    WYSIWYG.attach('textarea3', small); // small setup
	
    // Use it to display an iframes instead of a textareas
    //WYSIWYG.display('all', full);  
  </script>

	<title>My Title</title>
</head>

<body>
	<h1>XMLHttpRequest</h1>

	<!-- <button onclick="loadText('test.txt')">test button</button> -->
<form action="create.php" method="post" accept-charset="utf-8">
	<input type="text" name="filename" value="text">
	<input type="submit" name="name" value="create">
</form>

<form action="access.php" method="get" accept-charset="utf-8">
	<input type="text" name="filename" value="text">
	<input type="submit" name="name" value="access">
</form>
	<!-- <canvas id="view" width=1280px height=360px></canvas> -->

<!-- test  -->

<form action="form.php" method="post">
<textarea id="textarea3" style='width:500px;height:300px;'></textarea>
<input type="submit" value="送信">

</body>
</html>

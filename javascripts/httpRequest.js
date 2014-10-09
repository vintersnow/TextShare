var req = new XMLHttpRequest();

function loadText (path) {
	req.onreadystatechange= readyStateChange;

	req.open('get',path,true);
	req.send('');

}

function readyStateChange (argument) {
	if (req.readyState==4) {
		alert(req.responseText);
	}
}
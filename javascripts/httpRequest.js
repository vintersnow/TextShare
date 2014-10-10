//test1

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


//test2
var context;
var timer;

window.onload = function() {
	var canvas = document.getElementById("view");
	if ( canvas.getContext ) {
		context = canvas.getContext("2d");
		var timer = setInterval( mainLoop, 16 );
		document.onkeydown = onKeyDown;
	}
}

var stringbefore = '';
var stringcode = '';


// キーチェック
function onKeyDown( e ) {
	// ここでサーバに送信する！
	var xmlHttpRequest = new XMLHttpRequest();
	stringbefore = String.fromCharCode(e.keyCode);
	console.log(filename);
    xmlHttpRequest.open( "GET", "keyDown.php?filename=" + filename + "&keycode=" + String.fromCharCode(e.keyCode), true );

    xmlHttpRequest.onreadystatechange = function() {
        // 受信！
        if ( xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){

            stringcode = xmlHttpRequest.responseText;
          }
    };

    xmlHttpRequest.send( null );
}

function mainLoop() {
	context.clearRect( 0, 0, 320, 240 );
	context.font = "32px Arial";
	context.fillText( "何かKeyを押すのだ！", 20, 60 );
	context.font = "16px Arial";
	context.fillText(stringcode,20,100);
}
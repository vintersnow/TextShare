var text_co1;
var text_co2;

window.onload = function () {
	text_co1 = document.getElementById('comment1');
	text_co2 = document.getElementById('comment2');
	document.onkeydown = onKeyDown;
}


function onKeyDown( e ) {
	//ここでサーバに送信する！

	var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open( "POST", 'input.php', true );

    xmlHttpRequest.onreadystatechange = function() {
        // 受信！
        if ( xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){

            console.log(xmlHttpRequest.responseText);
          }
    };

    var text = { filename:filename, text:text_co1.value};
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttpRequest.send( EncodeHTMLForm( text ) );

 	text_co2.value = text_co1.value;

}

// HTMLフォームの形式にデータを変換する
function EncodeHTMLForm( data )
{
    var params = [];

    for( var name in data )
    {
        var value = data[ name ];
        var param = encodeURIComponent( name ).replace( /%20/g, '+' )
            + '=' + encodeURIComponent( value ).replace( /%20/g, '+' );

        params.push( param );
    }

    return params.join( '&' );
}
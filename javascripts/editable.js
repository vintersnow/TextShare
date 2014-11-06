var o = null;
var f = null;
var d = null;
var b = null;
var la = null;
var f2 = null;
var d2 = null;
var b2 = null;

//test

var editArea=null;

var filename = 'test';
var xmlHttpRequest;
var sel,start,sel2;

window.onload = function  () {
	// console.log('onload');
	f = document.getElementById('f');
  d = f.contentDocument;
  b = findBody(d);
  d.charset = 'utf-8';
  b.contentEditable = true;

  b.innerHTML = '<div>HELLO WORLD</div><div> a</div><div>test</div>';
  b.focus();
  sel = d.getSelection();
  sel.collapse(sel.anchorNode,4);
  console.log(sel);
  saveSelection();
  console.log(sel);
  console.log(b.innerHTML);
  console.log(b.innerText);

  console.log(d);

  // var htmlIn = b.innerHTML;
  // var textIn = b.innerText;
  // b.innerHTML = htmlIn;
  // restoreSelection();
  // console.log(sel);
  // console.log(b.innerHTML);
  // console.log(b.innerText);

  // b.innerHTML = textIn;
  // console.log(sel);
  // console.log(b.innerHTML);
  // console.log(b.innerText);

  // console.log(b.innerContent);
  // b.value = 'test';
  // console.log(d);
  // console.log(b);

  f2 = document.getElementById('f2');
  d2 = f2.contentDocument;
  b2 = findBody(d2);
  d2.charset = 'utf-8';
  b2.contentEditable = true;
  b2.innerHTML='';

  var editArea = document.getElementById('editArea');
  editArea.contentEditable = true;
  editArea.innerHTML = '<div>Hello edit div</div>'
  console.log(editArea);
  editArea.focus();
  var seld = window.getSelection();
  seld.collapse(seld.anchorNode,4);
  console.log(seld.anchorNode);
  var textdiv = editArea.innerHTML;
  editArea.innerHTML = textdiv+'<p>test</p>';
  editArea.focus();
  // seld.collapse(seld.anchorNode.childNodes[0],4);
  seld.collapse(seld.anchorNode.childNodes[1],4);
  console.log(seld);
  // console.log(b.innerHTML);
  // console.log(b.innerText);

  d.onkeyup = onKeyUp;


  xmlHttpRequest = new XMLHttpRequest();

  // startPulling();

}





function findBody(doc){
  for(var i = 0; i < doc.childNodes.length; ++i){
    if(doc.childNodes[i].nodeName == 'HTML'){
      for(var j = 0; j < doc.childNodes[i].childNodes.length; ++j){
        if(doc.childNodes[i].childNodes[j].nodeName == 'BODY'){
          return doc.childNodes[i].childNodes[j];
        }
      }
    }
  }
  return null;
}

function onKeyUp( e ) {
  //ここでサーバに送信する！

  // var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open( "POST", 'input.php', true );

    xmlHttpRequest.onreadystatechange = function() {
        // 受信！
        if ( xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){

            // console.log(xmlHttpRequest.responseText);
          }
    };

    // sel = d.getSelection();
    // start = sel.anchorOffset;


    var text={filename:filename,filenumber:3,text:b.innerHTML};
    xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttpRequest.send( EncodeHTMLForm( text ) );

    saveSelection();


  // b2.innerHTML = b.innerHTML;


}

// HTMLフォームの形式にデータを変換する
function EncodeHTMLForm( data ){
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

function startPulling () {
  setInterval(pullFromServer,1000);
}

function stopPulling () {
  clearInterval(pullFromServer);
}

function setCursol (text) {
  b.innerHTML = text;
  sel = d.getSelection();

  sel.collapse(sel.anchorNode,4);

  console.log(sel);
  console.log(start);
}

function pullFromServer () {

    sel = d.getSelection();
    start = sel.anchorOffset;

  xmlHttpRequest.open('POST','pull.php',true);
  xmlHttpRequest.onreadystatechange = function() {
    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
      var textGet = xmlHttpRequest.responseText;
      // setCursol(textGet);
        // b.innerHTML = textGet+'';
        // b.innerHTML = 
        // var textNode = document.createTextNode(textGet);
        // b.appendChild(textGet);
        var st = b.innerHTML;
        // st = st + '<p>p</p>';
        // b.innerHTML = st;
        // console.log(textNode);
        console.log(b.innerHTML);
        d = f.contentDocument;
        b = findBody(d);
        b.contentEditable = true;
        b.innerHTML = '<div>HELLO WORLD</div><div> a</div><div>test</div>';

        sel = d.getSelection();

        // sel.collapse(sel.anchorNode,4);
        console.log(sel);

    };
  }
  var text={filename:filename,filenumber:3};
  xmlHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlHttpRequest.send( EncodeHTMLForm( text ) );
}


var savedRange,isInFocus;
function saveSelection()
{
    if(window.getSelection)//non IE Browsers
    {
        savedRange = window.getSelection().getRangeAt(0);
    }
    else if(document.selection)//IE
    { 
        savedRange = document.selection.createRange();  
    } 
}

function restoreSelection()
{
    isInFocus = true;
    document.getElementById("editArea").focus();
    if (savedRange != null) {
        if (window.getSelection)//non IE and there is already a selection
        {
            var s = window.getSelection();
            if (s.rangeCount > 0) 
              s.removeAllRanges();
              s.addRange(savedRange);
        }
        else if (document.createRange)//non IE and no selection
        {
            window.getSelection().addRange(savedRange);
        }
        else if (document.selection)//IE
        {
            savedRange.select();
        }
    }
}
//this part onwards is only needed if you want to restore selection onclick
var isInFocus = false;
function onDivBlur()
{
    isInFocus = false;
}

function cancelEvent(e)
{
    if (isInFocus == false && savedRange != null) {
        if (e && e.preventDefault) {
            //alert("FF");
            e.stopPropagation(); // DOM style (return false doesn't always work in FF)
            e.preventDefault();
        }
        else {
            window.event.cancelBubble = true;//IE stopPropagation
        }
        restoreSelection();
        return false; // false = IE style
    }
}

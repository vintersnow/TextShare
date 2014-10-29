window.onload = function  () {
	console.log('onload');
	f = document.getElementById('f');
  d = f.contentDocument;
  b = findBody(d);
  d.charset = 'utf-8';
  b.contentEditable = true;
  b.innerHTML = '<div>HELLO WORLD</div>';
  b.focus();
}


//<![CDATA[
var o = null;
var f = null;
var d = null;
var b = null;
var la = null;

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



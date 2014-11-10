var socketio;

window.onload = function() {
  socketio = io.connect(location.origin);

  socketio.on("connected", function(name) {});
  socketio.on("publish", function(data) { addMessage(data.value); });
  socketio.on("disconnect", function() {});


  var textArea = document.getElementById("text");
  var myName = Math.floor(Math.random() * 100) + "さん";
  addMessage("貴方は" + myName + "として入室しました");
  start(myName);


//ace editor
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/twilight");
  var es = editor.getSession();
  es.setMode("ace/mode/javascript");
  editor.setValue("// text for setValue");
  var doc = editor.getSession().getDocument();
  var sel = editor.getSelection();

  editor.on('change',function (e) {
      // console.log(editor.getSelection().getCursor());
      // console.log(e);
      publishMessage(e.data);
    });
  
    sel.on('changeCursor',function () {
      // console.log(sel.getCursor());

    });
};

// 2.イベントに絡ませる関数の定義
function start(name) { socketio.emit("connected", name); }

function publishMessage(data) {
  // var textInput = document.getElementById('msg_input');
  // var msg = "[" + myName + "] " + textInput.value;
  // textInput.value = '';

  socketio.emit("publish", data);
}

function addMessage(data) {
  var domMeg = document.createElement('div');
  domMeg.innerHTML = data.text;
  msgArea.appendChild(domMeg);
}


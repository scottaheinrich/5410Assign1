document.getElementById("addEvent").onclick = function(){
  //document.getElementById("output").innerHTML += 'Hey'+"<br/>";
  var args = [document.getElementById("name").value,document.getElementById("interval").value,document.getElementById("times").value];
  var time = Date.now();
  gameLoop(args);
};

function gameLoop(args){
  var name = args[0];
  var interval = args[1];
  var times = args[2];
  var prevTime = Date.now();
  args.push(prevTime)




  render(args);
}

function update(){

}

function render(args){
  var out = document.getElementById("output");
  var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;

  document.getElementById("output").innerHTML += args[0] + "<br/>";
  document.getElementById("output").innerHTML += args[1] + "<br/>";
  document.getElementById("output").innerHTML += args[2] + "<br/>";
  document.getElementById("output").innerHTML += args[3] + "<br/>";

  if(isScrolledToBottom){
    out.scrollTop = out.scrollHeight - out.clientHeight;
  }
}

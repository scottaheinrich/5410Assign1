var prevTime = Date.now();
var first = 1;


document.getElementById("addEvent").onclick = function(){
  //document.getElementById("output").innerHTML += 'Hey'+"<br/>";
  var args = [document.getElementById("name").value,document.getElementById("interval").value,document.getElementById("times").value];
  var time = Date.now();
  gameLoop(args);
};

function gameLoop(args){
  var currTime = Date.now();
  if(first == 1)
  {
    document.getElementById("output").innerHTML += (currTime - prevTime) + "<br/>";
  }

  var name = args[0];
  var interval = args[1];
  var times = args[2];
  args.push(currTime)



  //first = 0;
  //render(args);
}

function update(elapsedTime){


}

function render(args){
  var out = document.getElementById("output");
  var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;

  //Output goes here
  document.getElementById("output").innerHTML += args[3] + "<br/>";

  if(isScrolledToBottom){
    out.scrollTop = out.scrollHeight - out.clientHeight;
  }
}

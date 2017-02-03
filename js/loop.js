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


  document.getElementById("output").innerHTML += name + "<br/>";
  document.getElementById("output").innerHTML += interval + "<br/>";
  document.getElementById("output").innerHTML += times + "<br/>";
  document.getElementById("output").innerHTML += prevTime + "<br/>";


}

function update(variable){



}

function render(variable){
  var output = document.getElementById("output");
  output.value += variable;
}

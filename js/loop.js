var currTime, prevTime = performance.now();
var delta = 0;
var eventMap = {};
var args = [];
var count = 0;

document.getElementById("addEvent").onclick = function(){
  //Get arguments from input fields on button click
  if(document.getElementById("name").value && document.getElementById("interval").value && document.getElementById("times").value){
    args = [ document.getElementById("name").value, document.getElementById("interval").value, document.getElementById("times").value ];
  }
};

function gameLoop(){
  var currTime = performance.now();

  delta = delta + Math.min(1, (currTime - prevTime) / 1);
  while(delta > .1){
    delta = delta - .1;
    update(delta);

  }

  //clear array for next button push
  args = [];
  prevTime = performance.now();
  requestAnimationFrame(gameLoop);
}

function update(delta){
  count += 1;
  if(count == 10001){
    count = 0;
  }
  if(typeof args[0] !== 'undefined'){
    eventMap[args[0]] = [args[1],args[2]];
  }
  Object.keys(eventMap).forEach(function(key) {
    if(count == eventMap[key][0] && eventMap[key][1] > 0){
        console.log(count)
        eventMap[key][1]--;
        render();
      }
    if(eventMap[key][1] == 0){
        delete eventMap[key];
    }
  });

}

function render(){
  var out = document.getElementById("output");
  var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;

  Object.keys(eventMap).forEach(function(key) {
    document.getElementById("output").innerHTML += 'Event: ' + key + ' (' + eventMap[key] + ' remaining)' + '<br/>';
  });

  if(isScrolledToBottom){
    out.scrollTop = out.scrollHeight - out.clientHeight;
  }
}

requestAnimationFrame(gameLoop);

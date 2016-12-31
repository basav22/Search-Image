var el = document.getElementsByClassName('input-lg')[0];
var leftVal = 20;
var repeatTimer = 120;
var cnt = 0;
var dist = 100; // 100px
var time = 5 * 1000; // 5 sec = 5000 ms
var maxIterations = dist * repeatTimer / time;
var interval;

function moveLeft(x) {
  return el.style.left = ''+x+'px';
}

function animate() {
  if(cnt == maxIterations)
    clearInterval(interval);

  interval = setInterval(function(){moveLeft(leftVal*cnt++)},repeatTimer);
}


function main(dist, time) {
  var cnt = 0;
  var repeatTimer = 120;
  var timeMs = time * 1000;

  var leftVal = dist * repeatTimer / timeMs;

  var maxIterations = Math.floor(timeMs / repeatTimer);

  if(cnt == maxIterations)
    clearInterval(interval);

  interval = setInterval(function(){moveLeft(leftVal*cnt++)},repeatTimer);
}

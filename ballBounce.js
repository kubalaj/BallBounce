var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function drawBall() {

}


function draw() {
  drawBall();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(draw);
}

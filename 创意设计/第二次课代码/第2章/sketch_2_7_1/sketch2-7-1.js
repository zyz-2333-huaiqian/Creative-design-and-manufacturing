function setup() {
  createCanvas(600,600);
}
function draw() {
  background(255);
  fill(235);
  circle(300,300,200);
  fill(0);
  circle(mouseX,mouseY,100);
}
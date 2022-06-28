function setup() {
  createCanvas(800,400);
  background(255);
  diameter = 150;
}
function draw() {
  fill(200);
  circle(1*width/4, height/2, diameter);
  fill(100);
  circle(2*width/4, height/2, diameter);
  fill(0);
  circle(3*width/4, height/2, diameter);
}
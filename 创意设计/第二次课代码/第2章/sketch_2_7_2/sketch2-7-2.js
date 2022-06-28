function setup() {
  createCanvas(600,600);
}
function draw() {
  background(255);
  fill(235);
  circle(300,300,200);
  fill(0);
  x = map(mouseX,0,width,260,340);
  y = map(mouseY,0,height,260,340);
  circle(x,y,100);
}
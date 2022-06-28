function setup() {
  createCanvas(600,600);
}
function draw() {
  background(255);
  fill(180);
  circle(300,300,300);
  fill(235);
  x1 = map(mouseX,0,width,260,340);
  y1 = map(mouseY,0,height,260,340);
  circle(x1,y1,200);
  fill(0);
  x2 = map(mouseX,0,width,220,380);
  y2 = map(mouseY,0,height,220,380);
  circle(x2,y2,100);
}
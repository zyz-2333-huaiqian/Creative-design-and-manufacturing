function setup() {  
  createCanvas(800,600);
}
function draw() {
  background(255);
  fill(255);
  circle(400, 300, 500);
  circle(305, 180, 180);
  circle(495, 180, 180);
  circle(400, 300, 40);
  circle(400, 420, 140);
  fill(0);
  x1 = map(mouseX,0,width,280,330);
  y1 = map(mouseY,0,height,155,195);
  circle(x1, y1, 110);
  x2 = map(mouseX,0,width,470,520);
  y2 = map(mouseY,0,height,155,195);
  circle(x2, y2, 110);
}
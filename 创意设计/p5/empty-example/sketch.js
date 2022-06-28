let DrawCircle = false
let R=18
function setup() {
    //noLoop()
    //create canvas
    createCanvas(600, 600)
    noFill()
    strokeWeight(1) 
    rectMode(CENTER);
    frameRate(30)
}

function draw() {
    background(255)   
    translate(width/2, height/2)
    drawcircle(R)
    R++
    R%=17
    //drawsquare()
}

function mousePressed()
{
    DrawCircle = !DrawCircle;
}

function drawcircle(r)
{
    noFill()
    strokeWeight(1)
    for(let i=r;i<width;i+=20)
    {
        stroke(map(i,0,width,0,255))
        circle(0, 0, i);
    }
}
function drawsquare()
{
    rotate(PI/4)
    strokeWeight(4)
    rect(0,0,400)
} 
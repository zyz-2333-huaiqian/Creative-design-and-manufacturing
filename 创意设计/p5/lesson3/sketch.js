function setup() {
    createCanvas(450, 450);
    background(255);
    noLoop();
}

function draw() {
    console.log(frameCount);
    mondrian();
}

function mousePressed()
{
    redraw();
}

function mondrian()
{
    const colors=[
        [217,37,23],
        [219,217,205],
        [219,217,205],
        [219,217,205],
        [219,217,205],
        [45,47,121],
        [235,183,46]]
    strokeWeight(3)
    for(let row=0;row<height;row+=rowSize)
    {
        rowSize = random(30,100);
        for(let col=0;col<width;col+=colSize)
        {
            colSize = random(50,100);
            fill(random(colors));
            rect(col, row, colSize, rowSize);
        }
    }
}
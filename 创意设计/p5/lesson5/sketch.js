let h = 160
let se = 0;
let yoff = 0;
function setup() {
    createCanvas(1000, 700);
    //noLoop();
    randomSeed(se);
}

function draw() {
    background(200)
    yoff+=0.002
    translate(width / 2, height);
    brunch(h)
    mousePressed()
}

function brunch(h) {
    let sw = map(h, 10, 160, 1, 10)
    strokeWeight(sw)
    line(0, 0, 0, -h)
    translate(0, -h);
    h *= 0.75;
    if (h > 10) {
        n=floor(random(2,4))
        //let theta = map(mouseX,0,width,10,90)
        for (let i = 0; i < n; i++) {
            //let theta = random(-40, 40)
            let theta = map(noise(i,yoff),0,1,-30,30);
            push()
            rotate(radians(theta))
            brunch(h)
            pop()
        }

        // push()
        // rotate(radians(-theta))
        // brunch(h)
        // pop()
    }
    else {
        noStroke()
        fill('green');
        circle(0, 0, 6)
    }
}

function mousePressed() {
    se = millis();
    redraw();
}
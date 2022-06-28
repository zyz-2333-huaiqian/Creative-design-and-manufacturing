function setup() {
    createCanvas(800, 600)
    background(255)
    colorMode(HSB, 360, 100, 100, 1)
    noStroke()
    cclouds = color(330, 25, 100)
    csky = color(220, 50, 50)
    cFurther = color(230, 25, 90)
    cCloser = color(210, 70, 10)
}

function draw() {
    background(90)
    // for (let y = 0; y < height / 2; y++) {
    //     lerp = lerpColor(csky, cFurther, y * 2 / height)
    //     stroke(lerp)
    //     line(0, y, width, y)
    // }

    // for (let y = 0; y < height / 3; y += 1) {
    //     for (let x = 0; x < width; x += 1) {
    //         noStroke()
    //         ration = map(y, 0, height / 3, 1, 0)
    //         fill(330, 25, 100, noise(x * 0.005, y * 0.02) * ration)
    //         circle(x, y, 2)
    //     }
    // }

    for (let n = 0; n < 6; n++) {
        ymin = map(n, 0, 6, height * 0.2, height * 0.8)
        stroke(0);
        //fill(lerpColor(cFurther, cCloser, (n + 1) / 8));
        beginShape()
        vertex(0, height)
        for (let x = 0; x < width + 1; x += 5) {
            noiseValue = noise(x * 0.005, ymin * 0.02)
            yMountain = map(noiseValue, 0, 1, ymin, height)
            vertex(x, yMountain)
        }
        vertex(width, height)
        endShape(CLOSE)
    }

    textSize(24);
    fill(255);
    text("赵英竹", 50, 50)
}
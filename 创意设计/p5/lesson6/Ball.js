class Ball {
    constructor() {
        this.d = 50
        this.xPos = random(this.d/2,windowWidth)
        this.yPos = random(this.d/2,windowHeight)
        this.xSpeed = 5
        this.ySpeed = 5
    }
    update() {
        if (this.xPos > windowWidth - this.d / 2 || this.xPos < this.d / 2) {
            this.xSpeed *= -1
        }
        this.xPos += this.xSpeed;
        if (this.yPos > windowHeight - this.d / 2 || this.yPos < this.d / 2) {
            this.ySpeed *= -1
        }
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
    }
    display() {
        stroke(0)
        fill(random(0,255))
        circle(this.xPos, this.yPos, this.d)
    }
    intersection(b){
        let distance = dist(this.xPos,this.yPos,b.x,b.y)
        return distance <(b.d/2 +this.d/2)?true:false;
    }
}
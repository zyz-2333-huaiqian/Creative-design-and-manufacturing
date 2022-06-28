class Catcher {
    constructor(tempD) {
        this.d = tempD
    }
    display() {
        fill(175)
        this.x = mouseX
        this.y = mouseY
        if(mouseY>(windowHeight*4/5))
        {
        circle(this.x, this.y, this.d)
        }
    }
}
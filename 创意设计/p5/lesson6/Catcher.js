class Catcher {
    constructor(tempD) {
        this.d = tempD
    }
    display() {
        fill(175)
        this.x = mouseX
        this.y = mouseY
        circle(this.x, this.y, this.d)
    }
}
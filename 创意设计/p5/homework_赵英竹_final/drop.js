class Drop {
    constructor(music,speed) {
        this.wid = windowWidth / 10
        this.height = 20
        this.x = music;
        this.y = 0
        this.speed = speed
    }

    update(speed) {
        this.speed=speed;
        this.y += this.speed;
    }
    display() {
        fill(50, 50, 100)
        //noStroke()
        rect(this.x * windowWidth / 10, this.y, this.wid, this.height)
    }
    isBottom() {
        return (this.y > (windowHeight * 4 / 5)) ? true : false;
    }
    intersection(b) {
        if (this.x == int(b.x / this.wid)) {
            let distance = dist(0, this.y, 0, b.y)
            //console.log(distance)
            return (distance < 20) ? true : false;
        }
        else 
        return false; 
    }
    score() {
        return int(this.y/(windowHeight/5)) 
    }
}
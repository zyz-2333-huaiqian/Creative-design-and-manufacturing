class Drop {
    constructor() {
        this.d = 8
        this.x=random(0,windowWidth)
        this.y = -this.d*4
        this.speed = random(1,5)
    }

    update()
    {
        this.y +=this.speed;
    }
    display()
    {
        fill(50,50,100)
        noStroke()
        circle(this.x,this.y,16)
    }
    isBottom()
    {
        return (this.y>windowHeight)?true:false;
    }
    intersection(b){
        let distance = dist(this.x,this.y,b.x,b.y)
        return distance <(b.d/2 +this.d/2)?true:false;
    }
}
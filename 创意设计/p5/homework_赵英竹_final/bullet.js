class Bullet {
    constructor() {
        //let seed = [0,1,2,3,4,5,6,7,8,9]
        this.wid = windowWidth/10
        this.height = 20
        this.x=mouseX
        this.y = windowHeight*4/5
        this.speed = 4
    }

    update()
    {
        this.y -=this.speed;
    }
    display()
    {
        fill(150,50,100)
        //noStroke()
        rect(int(this.x/this.wid)*windowWidth/10,this.y,this.wid,this.height)
        //console.log(this.x%this.wid)
    }
    isTop()
    {
        return (this.y<0)?true:false;
    }
    
}
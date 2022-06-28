let catcher;
let timer;
let drops = []
let dropnumber=0;
function setup() {
    createCanvas(windowWidth, windowHeight)
    noCursor()
    catcher = new Catcher(50);
    timer = new Timer(2500)
    drop = new Drop()
    drops.push(drop)
}

function draw() { 
    background(255)
    if (timer.isFinished()) {
        timer.reset();
        drop = new Drop()
        drops.push(drop)
        dropnumber++;
    }
    catcher.display();
    for(i=0;i<dropnumber;i++)
    {
        drops[i].update();
        drops[i].display();
        if (drops[i].intersection(catcher)||drops[i].isBottom()) {
            console.log("colli")
            drops.splice(i,1);
            dropnumber--;
        }
    }
    //ball.update();
    //ball.display();
}


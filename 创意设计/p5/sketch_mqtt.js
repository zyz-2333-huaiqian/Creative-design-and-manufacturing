let bullets = []
let bulletnumber = 0;
let drops = []
let dropnumber = 0;
let musicnumber = 0;
let score = 0;
let level = 1;
let serial;
let musics = [1,2,3,4,0,5,4,1,2,3,4,0,5,4,3,4,2,3,1,2,0]
let latestData = "waiting for data";

function setup() {
    createCanvas(windowWidth, windowHeight)
    noCursor()
    drop = new Drop(musics[musicnumber],1)
    drops.push(drop)
    timer = new Timer(2500)
    catcher = new Catcher(50)

    serial = new p5.SerialPort();

    serial.list();
    serial.open('COM14');

    serial.on('connected', serverConnected);

    serial.on('list', gotList);

    serial.on('data', gotData);

    serial.on('error', gotError);

    serial.on('open', gotOpen);

    serial.on('close', gotClose);
    // noLoop();
    //frameRate(1);
}

function serverConnected() {
    print("Connected to Server");
}

function gotList(thelist) {
    print("List of Serial Ports:");

    for (let i = 0; i < thelist.length; i++) {
        print(i + " " + thelist[i]);
    }
}

function gotOpen() {
    print("Serial Port is Open");
}

function gotClose() {
    print("Serial Port is Closed");
    latestData = "Serial Port is Closed";
}

function gotError(theerror) {
    print(theerror);
}
function gotData() {
    let currentString = serial.readLine();
    trim(currentString);
    if (!currentString) return;
    latestData = currentString;
}

function draw() {
    background(255)
    strokeWeight(2)
    for (i = 1; i <= 9; i++) {
        line(i * windowWidth / 10, 0, i * windowWidth / 10, windowHeight)
    }
    fill('#fae')
    rect(0, windowHeight * 4 / 5, windowWidth, 7)
    //line(0,windowHeight*4/5,windowWidth,windowHeight*4/5)
    catcher.display();
    if (timer.isFinished()) {
        timer.reset();
        musicnumber++;
        drop = new Drop(musics[musicnumber],level)
        drops.push(drop)
        dropnumber++;
    }
    for (i = 0; i < dropnumber; i++) {
        drops[i].update();
        drops[i].display();
        if (drops[i].isBottom()) {

            drops.splice(i, 1);
            dropnumber--;
            serial.write("b");//off
        }
        for (j = 0; j < bulletnumber; j++) {
            if (drops[i].intersection(bullets[j])) {
                console.log("colli")
                score += drops[i].score()
                console.log(score)
                drops.splice(i, 1);
                dropnumber--;
                bullets.splice(j, 1);
                bulletnumber--;
                serial.write("a");//on
            }
        }
    }
    for (i = 0; i < bulletnumber; i++) {
        bullets[i].update();
        bullets[i].display();
        if (bullets[i].isTop()) {
            //console.log("colli")
            bullets.splice(i, 1);
            bulletnumber--;
        }
    }
    textSize(32);
    fill(50)
    //fill(255);
    text("level:" + level, 50, 50)
    text("score:" + score, 50, 100)
    if (score > 50) {
        level++;
        timer.totaltime -= 500;
        score = 0;
    }
}


function mousePressed() {
    bullet = new Bullet()
    bullets.push(bullet)
    bulletnumber++;
}
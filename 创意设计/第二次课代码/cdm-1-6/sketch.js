/* 
变量讲解，Bouncing_Ball
*/

let Px = 200;
let Py = 300;
let Vx = 3;
let Vy = 5;
let Diam = 10;
//setup()函数首先被执行，且只执行一次 
function setup() {
    createCanvas(windowWidth, windowHeight);// windowWidth和windowHeight为系统变量
    fill(255,0,0);
}

//draw()函数按照一定的帧率(frameRate)重复执行 
function draw() {
    background(255);//背景颜色设置为黑色
    Px += Vx;
    Py += Vy;
    circle(Px, Py, Diam);
    if (Px > width || Px < 0) {
        Vx *= -1;
    }
    if (Py > height || Py < 0) {
        Vy *= -1;
    }
}

/* 

*/
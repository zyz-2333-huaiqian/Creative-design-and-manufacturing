/* 
random()--取0-1之间的随机数（包括0，不包括1）
random(min, max)--取最小值和最大值之间的随机数.
可以取到最小值，但不能取到最大值
*/

//setup()函数首先被执行，且只执行一次 
function setup() {
    createCanvas(1366, 768);// 第一个参数1366为画布宽度，第二个参数768为高度
    noStroke();//取消边缘颜色填充
    background(0);//背景颜色设置为黑色
}

//draw()函数按照一定的帧率(frameRate)重复执行 
function draw() {
    let r = random(0,255);//声明变量r，并赋值0-255之间的一个随机数
    let g = random(0,255);
    let b = random(0,255);
    let a = random(0,180);
    let x = random(0,width);//width是系统变量-画布宽度
    let y = random(0,height);//height是系统变量-画布高度
    let d = random(10,20);
    fill(r, g, b,a);//设置图形填充颜色及透明度
    circle(x, y, d); //绘制圆
}

/* 
系统变量
movedX
movedY
mouseX
mouseY
pmouseX
pmouseY
winMouseX
winMouseY
pwinMouseX
pwinMouseY
mouseButton
mouseIsPressed
keyIsPressed
key
keyCode
*/
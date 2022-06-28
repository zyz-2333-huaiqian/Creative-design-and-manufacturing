/* 
填充颜色相关函数
fill(),stroke(),noFill(),noStroke()
*/

//setup()函数首先被执行，且只执行一次 
function setup() {
    createCanvas(800, 600);// 第一个参数800为画布宽度，第二个参数600为高度
    // noStroke();//取消边缘颜色填充
}

//draw()函数按照一定的帧率(frameRate)重复执行 
function draw() {
    fill(255, 0, 10);//设置图形填充颜色
    circle(400,300,100); //circle(x,y,d)函数，第1,2个参数为圆心坐标，第3个参数为直径   
    fill(255, 255, 0, 127);//设置新的图形填充颜色,其中第4个参数为透明度
    // noFill();//取消图形颜色填充
    // stroke(0);//边缘颜色填充为黑色
    rect(400,300,100,60); //rect(x,y,w,h)，第1,2个参数矩形左上角坐标值，w为宽度，h为高度 
}
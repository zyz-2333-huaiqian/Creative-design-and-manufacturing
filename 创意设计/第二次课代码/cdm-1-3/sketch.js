/* 
绘制一个二维图形，其他图形可参考
https://p5js.org/reference/
*/

//setup()函数首先被执行，且只执行一次 
function setup() {
    createCanvas(800, 600);// 第一个参数800为画布宽度，第二个参数600为高度
    background(200);//设置背景颜色为浅灰色，默认为白色，在浏览器中看不出画布范围
}

//draw()函数按照一定的帧率(frameRate)重复执行 
function draw() {
    ellipse(400,300,100,100); //ellipse(x,y,w,h)函数，第1,2个参数为圆心坐标，第3,4个参数为直径   
}
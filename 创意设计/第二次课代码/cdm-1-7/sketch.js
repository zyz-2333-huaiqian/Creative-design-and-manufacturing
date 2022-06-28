/* 
贝塞尔曲线
*/

//setup()函数首先被执行，且只执行一次 
function setup() {
    createCanvas(windowWidth, windowHeight);// windowWidth和windowHeight为系统变量
}

//draw()函数按照一定的帧率(frameRate)重复执行 
function draw() {
        portrait();

}

function portrait(){
   
        strokeWeight(1);
        stroke(0,0,0);
        fill(234,234,234);//(234,234,234)
        beginShape();
        vertex(403,161);
        bezierVertex(420,214,451,249,427,324);
        bezierVertex(479,278,466,329,460,375);
        bezierVertex(433,413,413,421,420,346);
        bezierVertex(401,351,479,478,244,535);
        bezierVertex(129,420,156,400,141,315);
        bezierVertex(98,96,348,107,269,117);
        bezierVertex(323,99,380,123,404,160);
        endShape();
        // 脖子
        beginShape();
        vertex(266,528);
        bezierVertex(329,517,374,482,397,454);
        bezierVertex(410,548,376,556,364,625);
        bezierVertex(287,637,277,625,266,528);
        endShape();
        //头发
        fill(60,58,71);//给头发眉毛的黑色填充等
        //刘海
        beginShape();
        vertex(261,104);
        bezierVertex(141,106,66,290,137,340);
        bezierVertex(139,239,231,214,246,146);
        bezierVertex(304,211,61,332,253,263);
        bezierVertex(396,188,300,60,406,265);
        bezierVertex(416,304,405,339,440,329);
        bezierVertex(474,290,471,343,458,387);
        bezierVertex(494,333,476,304,450,273);
        bezierVertex(450,198,447,154,391,115);
        bezierVertex(341,87,296,97,252,104);
        endShape();
        // 脖子部分头发
        beginShape();
        vertex(418,395);
        bezierVertex(383,477,419,520,357,607);
        bezierVertex(402,601,422,486,461,575);
        bezierVertex(506,632,547,619,595,581);
        bezierVertex(518,585,456,486,468,363);
        bezierVertex(439,392,435,418,418,395);
        endShape();
        // 眉毛左
        beginShape();
        vertex(133,301);
        bezierVertex(215,275,214,297,135,306);
        endShape();
        //眉毛右
        beginShape();
        vertex(247,288);
        bezierVertex(294,247,337,232,359,263);
        bezierVertex(311,240,234,307,265,283);
        endShape();
        //鼻子
        noFill();
        bezier(237,294,227,394,223,370,255,409);
        //嘴巴
        fill(179,75,76);
        beginShape();
        vertex(212,447);
        bezierVertex(247,423,279,436,301,443);
        endShape();
        fill(209,158,157);
        beginShape();
        vertex(212,447);
        bezierVertex(238,462,272,452,301,443);
        endShape();
        //眼睛
        //眼睫毛 眼皮
        fill(147,107,115);  
        beginShape();
        vertex(146,352);
        bezierVertex(162,307,201,319,212,337);
        endShape();
        //右
        beginShape();
        vertex(274,317);
        bezierVertex(308,271,341,287,365,305);
        endShape();
        // //眼眶 左
        fill(153,150,157);  
        beginShape();
        vertex(146,352);
        bezierVertex(169,315,197,328,212,337);
        endShape();
        //左下半部分
        beginShape();
        vertex(146,352);
        bezierVertex(170,354,186,350,212,337);
        endShape();
        //右
        beginShape();
        vertex(274,317);
        bezierVertex(325,341,351,297,365,305);
        endShape();
        beginShape();
        vertex(274,317);
        bezierVertex(311,282,344,294,365,305);//311,292,344,294,365,305
        endShape();
          //眼球
        fill(87,69,81);  
        circle(180,339,23);//左
        circle(318,308,26);//右 316,311,25
        fill(0,0,0);  
        circle(180,339,13);
        circle(318,308,14);
        fill(255,255,255);  
        circle(182,333,5);
        circle(312,305,6);
    
        
}
/* 

*/
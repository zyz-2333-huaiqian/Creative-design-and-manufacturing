let count = 0;//计数
let flag=false;//点击鼠标
let step=5;//移动的数
function setup() {
  createCanvas(600, 600);
  frameRate(15);
}

function showEvil(a) {
stroke(random(1,255),random(1,255),random(1,255));//随机颜色
//耳朵
strokeWeight(6);
line(92-a,213-a,85-a,107-a);
line(85-a,107-a,153-a,158-a);
line(99-a,145-a,110-a,136-a);
line(103-a,162-a,126-a,143-a); 
line(239+a,111+a,298+a,30+a);
line(298+a,30+a,337+a,134+a);
line(274+a,68+a,302+a,74+a);
line(261+a,90+a,306+a,93+a); 
noFill();
//尾巴
bezier(547+a,297+a,317-a/2,455-a/2,625+a/2,348+a/2,388,543);
triangle(527+a,299+a,538+a,313+a,550+a,297+a);
//牙
strokeWeight(2);
stroke(0);
line(222,438+a,227,448+a);
line(227,448+a,232,437+a);
line(262,438+a,267,448+a);
line(267,448+a,272,437+a);
//红晕
line(317+a,346,334+a,333);
line(334+a,333,335+a,341);
line(335+a,341,347+a,333);
line(347+a,333,348+a,334);
}

function drawMain() {
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
//脖子
beginShape();
vertex(266,528);
bezierVertex(329,517,374,482,397,454);
bezierVertex(410,548,376,556,364,625);
bezierVertex(287,637,277,625,266,528);
endShape();
//头发
fill(60,58,71);
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
//脖子部分
beginShape();
vertex(418,395);
bezierVertex(383,477,419,520,357,607);
bezierVertex(402,601,422,486,461,575);
bezierVertex(506,632,547,619,595,581);
bezierVertex(518,585,456,486,468,363);
bezierVertex(439,392,435,418,418,395);
endShape();
//眉毛左
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
 //眼眶 左
if(count>5&&count<=15)
{
fill(153,150,157);  
beginShape();
vertex(146,352);
bezierVertex(169,315,197,328,212,337);
endShape();
}
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
  if(count>5&&count<=15)
{
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
}

function draw() {
background(218,230,246);
drawFlowers();
drawMain(); 
if(!flag)//如果没点击鼠标暂停
{
count += 1;
if(count<=10) {
  showEvil(count);
  } 
else if(count<= 20) {
    count += 1;
  showEvil(20-count);
  } else {
    count = 0;
  }
}
 else
   drawMain();
}

//暂停的情况
function mousePressed() {
  if (!flag) {
    flag=true;
  } else {
    flag=false;
    count = 0;
  }
}

//背景的花团随鼠标动
function drawFlowers()
{
strokeWeight(1);
stroke(0,0,0);
fill(153,102,161);
beginShape();
vertex(-5,389);
bezierVertex(116+mouseX/step,362+mouseY/step,40+mouseX,266+mouseY,186,471);
bezierVertex(246,564,273,463,276,604);
bezierVertex(-12,604,-45,673,-3,391);
endShape();
fill(137,124,177); 
beginShape();
vertex(444,386);
bezierVertex(511+mouseX/step,405,538+mouseX,386,608,407);
bezierVertex(615,854,632,538,580,606);
bezierVertex(152,684,410,372,439,385);
endShape();
}

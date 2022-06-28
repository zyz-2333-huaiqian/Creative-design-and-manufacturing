
function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
  }
  
  function draw() {
    
    noStroke();
    background(16,30,70);
    stars();
    planet();
    flower();
    drawme();
    
    // tools();//开启或关闭坐标提示！
  }
  
  function planet(){
    fill(246,231,102);
    ellipse(250,900,1000,1000);
    fill(244,192,91);
    ellipse(90,470,30,20);
    ellipse(350,490,100,50);
    ellipse(170,430,50,35);
    ellipse(480,490,30,20);
      
  }
  function drawme(){
    
   fill(0);//脚
    circle(220,450,45);
    circle(280,450,45);
    fill(106,141,181);
    rect(220,400,40,100);
    rect(280,400,40,100);
     
    cloth();//摆动的衣服
  
    fill(253,221,200);//手
    circle(125,260,40);
    
    circle(375,260,40);
    fill(124,74,173);
    rect(160,260,60,40);
    rect(340,260,60,40);
    
    fill(124,74,173);//身体
    quad(190,240,310,240,330,390,170,390);
   
    fill(255,221,202);//头
    circle(250,160,160);
    rect(250,130,160,100,40);
   
    circle(175,150,30)//耳朵
    circle(325,150,30)
    
    fill(245,218,79);//围巾
    rect(250,230,100,20);
    circle(200,230,20);
    circle(300,230,20);
    
    moveeyes();//移动的眼睛
    
    stroke(0);
    noFill();    //眉毛
    arc(215,130,30,10,PI,0);
    arc(285,130,30,10,PI,0);
    
    fill(50);   //鼻子
    noStroke();
    circle(250,175,5);
    fill(209,51,26);
    ellipse(250,200,40,20);//嘴巴
    
    fill(90,54,22);////头发
    triangle(170,150,165,120,190,120);
    triangle(180,130,210,120,210,100)
    triangle(190,150,220,120,220,110);
    
    triangle(330,160,335,120,300,120);
    triangle(310,150,290,120,300,100);
    
    
    
    
    fill(23,18,12);
    quad(160,100,340,100,340,120,160,120);//帽子
    //rect(250,100,160,60,40);
    quad(165,100,210,50,290,50,335,100);
    circle(160,110,20);
    circle(340,110,20);
  }
  
  ///绘制交互动态眼睛，朝向鼠标位置
  function moveeyes(){
    let deltax=(mouseX-250)/250*7.5;
    let deltay=(mouseY-150)/350*7.5;
    
    fill(255);          //眼睛
    circle(215,150,35);
    circle(285,150,35);
    fill(0);
    circle(constrain(215+deltax,185,225),150+deltay,20);///减号改为加号变正常
    circle(constrain(285+deltax,225,295),150+deltay,20);//constrain函数限制眼睛范围
  }
  
  ///绘制动态星星
  function stars(){
    let cycle =millis()/5;
    fill(254,231,138);
    circle(cycle%500,cycle%500,20);
    circle((cycle-100)%500+200,(cycle-100)%500,20);
    circle((cycle-200)%500,(cycle-100)%500+100,10);
    circle((cycle-50)%500,(cycle-100)%500+100,12);
    circle((cycle-200)%500+50,(cycle-200)%500,20);
    circle((cycle-300)%500+150,(cycle-100)%500+100,20);
    circle((cycle-300)%500+150,(cycle-400)%500+100,15);
    circle((cycle-300)%500+150,(cycle-400)%500,20);
    circle((cycle-400)%500+250,(cycle-350)%500+50,20);
    circle((cycle-400)%500+50,(cycle-350)%500+50,5);
    circle((cycle-300)%500+0,(cycle-400)%500+400,20);
    circle((cycle-100)%500,(cycle-400)%500+100,20);
    circle((cycle-100)%500+150,(cycle-400)%500+100,10);
    circle((cycle-300)%500+150,(cycle-450)%500+100,5);
    circle((cycle-50)%500+150,(cycle-450)%500+100,5);
    circle((cycle-450)%500+450,(cycle-450)%500+300,15);
    
    
  }
  
  
  ///绘制花朵
  function flower(){
    fill(51,186,111);
    rect(50,450,10,60);
    fill(208,50,25);
    circle(50,420,25);
    ellipse(50,415,30,15);
  }
  
  ///绘制交互披风摆动
  function cloth(){ 
    let deltax=(mouseX-250)/250*7.5;
    let deltay=(mouseY-150)/350*7.5;
    fill(241,162,26);//披风
    quad(120+deltax,370+deltay,250,360,310,230,190,230);
  }
  
  
  ///工具函数，便于读取坐标
  function tools(){
     for(let i=10;i<500;i=i+10){
      stroke(250,170,240,100);
      line(0,i,500,i);
      line(i,0,i,500);
    }
    
    fill(0,0,0);
    text(mouseY,mouseX+25,mouseY);
    text(mouseX,mouseX,mouseY);
  }
  
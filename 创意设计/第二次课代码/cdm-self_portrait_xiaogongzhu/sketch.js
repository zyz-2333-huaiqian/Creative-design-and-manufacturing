let snowflakes = [];
function setup(){
  createCanvas(600,600);
}

function draw(){
  background(249,234,239);
  //   fill(255);
  drawgirl();
  drawcat();

let t = frameCount / 300; // update time

// create a random number of snowflakes each frame
for (let i = 0; i < random(2); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
}

// loop through snowflakes with a for..of loop
for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    fill(255,10,130);
    flake.display(); // draw snowflake
}

  
//  text(mouseX+" "+mouseY,mouseX,mouseY);
}

function snowflake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(10, 20);
    this.sizey = random(20, 30)
  
    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 3)));
  
    this.update = function(time) {
      // x position follows a circle
      let w = 0.2; // angular speed
      let angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * sin(angle);
  
      // different size snowflakes fall at slightly different y speeds
      this.posY += pow(this.size, 0.5);
  
      // delete snowflake if past end of screen
      if (this.posY > height) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };
  
    this.display = function() {
      ellipse(this.posX, this.posY, this.size, this.sizey);
    };
  }
  

function drawgirl(){
  push();
  stroke(254,219,126);
  strokeWeight(2);
  fill(255,243,187);
  beginShape();
  vertex(130,600);
  bezierVertex(-50,470,230,470,80,350);
  bezierVertex(20,290,100,260,135,220);
  bezierVertex(180,150,150,70,300,60);
  bezierVertex(450,70,420,150,465,220);
  bezierVertex(500,260,580,290,520,350);
  bezierVertex(370,470,650,470,470,600);
  endShape();//头发


  fill(197,235,255);
  stroke(252,235,160);
  beginShape();
  vertex(180,600);
  bezierVertex(180,600,300,100,420,600);  
  endShape(CLOSE);//身体
  
  
  fill(255);
  stroke(244,206,200);
  beginShape();
  vertex(180,220);
  bezierVertex(180,400,290,300,290,380);
  bezierVertex(290,410,310,410,310,380);
  bezierVertex(310,300,420,400,420,220);
  bezierVertex(420,220,330,200,300,130);
  bezierVertex(270,200,180,220,180,220);
  endShape(CLOSE);//脸


  beginShape()
  vertex(179,223);
  bezierVertex(150,225,150,250,181,258);
  endShape(CLOSE);
  beginShape()
  vertex(421,223);
  bezierVertex(450,225,450,250,419,258);
  endShape(CLOSE);//耳朵
  
  
  noFill();
  stroke(254,219,126);
  beginShape();
  vertex(420,220);
  bezierVertex(420,220,330,200,300,130);
  bezierVertex(270,200,180,220,180,220);
  bezierVertex(180,220,270,200,300,130);
  bezierVertex(330,200,420,220,420,220);
  endShape(CLOSE);//发际线


  stroke(227,156,160);
  strokeWeight(3);
  beginShape();
  vertex(230,210)
  bezierVertex(245,200,260,200,270,210);
  bezierVertex(260,200,245,200,230,210);
  endShape(CLOSE);
  beginShape();
  vertex(370,210);
  bezierVertex(355,200,340,200,330,210);
  bezierVertex(340,200,355,200,370,210);
  endShape(CLOSE);//眉毛
  
  
  stroke(227,109,115);
  beginShape();
  vertex(290,300);
  bezierVertex(295,310,305,310,310,300);
  endShape();//嘴巴


  fill(0);
  ellipse(250,240,15,25);
  ellipse(350,240,15,25);//眼睛
  
  
  var t1=(mouseX-300)/300*4.5;
  var t2=(mouseY-235)/365*4.5;
  fill(255);
  noStroke();
  ellipse(253+t1,235+t2,5,10);
  ellipse(353+t1,235+t2,5,10);//眼睛高光


  noStroke();
  fill(254,221,224);
  ellipse(230,280,25,25);
  ellipse(370,280,25,25);//腮红


  var t=millis()/500;
  stroke(254,219,126);
  strokeWeight(2);
  fill(255,245,204);
  beginShape();
  vertex(300,70);
  bezierVertex(260+20*abs(sin(t)),60,275+20*abs(sin(t)),50,270+20*abs(sin(t)),30);
  bezierVertex(280+20*abs(sin(t)),50,275+20*abs(sin(t)),60,300,70);
  endShape(CLOSE);
  beginShape();
  vertex(300,70);
  bezierVertex(310+20*abs(sin(t)),60,315+20*abs(sin(t)),50,320+20*abs(sin(t)),40);
  endShape(CLOSE);//呆毛
  pop();
  }


function drawcat(){
  push();
  stroke(191,126,120);
  fill(254,211,179);
  beginShape();
  vertex(mouseX-48,mouseY-33);
  bezierVertex(mouseX-50,mouseY-45,mouseX-50,mouseY-60,mouseX-31,mouseY-49);
  endShape(CLOSE);
  beginShape();
  vertex(mouseX+8,mouseY-33);
  bezierVertex(mouseX+10,mouseY-45,mouseX+10,mouseY-60,mouseX-9,mouseY-49);
  endShape(CLOSE);//猫耳朵
  
   fill(255);
  ellipse(mouseX-20,mouseY-20,60,55);//猫猫头
  
  
  noStroke();
  fill(254,211,179);
  beginShape();
  vertex(mouseX-50,mouseY-20);
  bezierVertex(mouseX-30,mouseY-20,mouseX-20,mouseY-30,mouseX-20,mouseY-40);
  bezierVertex(mouseX-20,mouseY-30,mouseX-10,mouseY-20,mouseX+10,mouseY-20);
  bezierVertex(mouseX+10,mouseY-60,mouseX-50,mouseY-60,mouseX-50,mouseY-20);
  endShape(CLOSE);
  stroke(191,126,120);
  beginShape();
  vertex(mouseX+10,mouseY-20);
  bezierVertex(mouseX+10,mouseY-60,mouseX-50,mouseY-60,mouseX-50,mouseY-20);
  bezierVertex(mouseX-50,mouseY-60,mouseX+10,mouseY-60,mouseX+10,mouseY-20);
  endShape(CLOSE);//头上黄色部分的毛


  stroke(191,126,120);
  fill(191,126,120);
  ellipse(mouseX-35,mouseY-27,5,10);
  ellipse(mouseX-5,mouseY-27,5,10);//眼睛
  ellipse(mouseX-20,mouseY-22,4,2);//鼻子
  
  
  noFill();
  beginShape();
  vertex(mouseX-28,mouseY-14);
  bezierVertex(mouseX-24,mouseY-13,mouseX-22,mouseY-14,mouseX-20,mouseY-15);
  bezierVertex(mouseX-18,mouseY-13,mouseX-16,mouseY-13,mouseX-12,mouseY-14);
  endShape();//嘴巴
  
  
  stroke(191,126,120);
  line(mouseX-50,mouseY-20,mouseX-43,mouseY-19);
  line(mouseX-48,mouseY-11,mouseX-42,mouseY-14);
  line(mouseX+10,mouseY-20,mouseX+3,mouseY-19);
  line(mouseX+8,mouseY-11,mouseX+2,mouseY-14);//胡子
  pop();
  
}

  
  








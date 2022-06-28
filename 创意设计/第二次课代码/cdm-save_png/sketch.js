function setup() { 
    createCanvas(500, 300); 
    textSize(18); 
    background("lightgreen"); 
    text("初晓的Q版自画像",100, 20); 
    saveImageBtn = createButton("保存图片"); 
    saveImageBtn.position(width-80, height-30); 
    saveImageBtn.mousePressed(saveAsCanvas); 
  } 
   
  function saveAsCanvas() { 
    save("初晓.png"); 
  } 
    

    

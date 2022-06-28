let serial;
let latestData = "waiting for data";

function setup() {
  createCanvas(windowWidth, windowHeight);

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
  frameRate(1);
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
  // console.log(currentString);
  latestData = currentString;
}

function draw() {
  background(255, 255, 255);
  fill(0, 0, 0);
  text(latestData, 10, 10);
  // ellipse(50,50,latestData,latestData);
  rect(100, 100, 50, 50);
  if (serial.available() > 0) {
    // console.log("serial")
    // let data = serial.readStringUntil('\n');
    let data = serial.readString();
    // if (data == "on"){
    console.log(data);
    fill('red');
    circle(width/2,height/2,Number(data)*10);
    // }
  }
}

// function mousePressed() {
//   if ((mouseX >= 100) && (mouseX <= 150) && (mouseY >= 100) && (mouseY <= 150)) {
//     serial.write("a");
//     // console.log("LED turn off");
//   } else {
//     serial.write("b");
//     // console.log("LED turn on");
//   }
// }
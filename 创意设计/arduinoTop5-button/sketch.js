let serial;
let latestData = "waiting for data";

function setup() {
  frameRate(10)
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

function gotClose(){
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
 console.log(currentString);
 latestData = currentString;
}
function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
 // Polling method
  if (serial.available() > 0) {
  let data = serial.readChar();
  console.log(data);
  switch(data){
    case('a'):
    fill(255,0,0);
    circle(width/2,height/2,300);
    break;
    case('b'):
    fill(255,255,0);
    circle(width/2,height/2,100);
    break;
    default:break;
  }
  // ellipse(50,50,data,data);
 }

}
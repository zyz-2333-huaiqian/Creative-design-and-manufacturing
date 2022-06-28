// #include <Arduino.h>
#include <NewTone.h>
volatile char receiveChar;
int i=1;

int myfrequncy[]={277,349,370,415,466,554};
                //d5  d7, z1, z2, z3  z5
                //0   1   2   3   4   5

int music[]={1,2,3,4,0,5,4,1,2,3,4,0,5,4,3,4,2,3,1,2,0,1,2,3,4,0,5,4,1,2,3,4,0,5,4,3,4,2,3,1,2,0,3,2,3,2,3,4,5,4,3,2,3,2,3,4,3,2,5};

int mybeat[]={500,500,500, 500, 500, 500,500};

void setup(){
  receiveChar = 0;
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  digitalWrite(1,HIGH);
  pinMode(0, OUTPUT);
}

void loop(){
  if (Serial.available() > 0) {
    receiveChar = Serial.read();
    if (receiveChar == 'a') {
      digitalWrite(0,LOW);
      Serial.write(255);
      if( i <= (sizeof(music)/sizeof(music[0]))) {
    NewTone(2,myfrequncy[music[(int)(i - 1)]],500);
    delay(10);
    i++;
  }

    } else if (receiveChar == 'b') {
      digitalWrite(0,HIGH);
      Serial.write(0);
      i++;
      
    }

  }
}
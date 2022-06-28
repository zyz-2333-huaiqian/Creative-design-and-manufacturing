// #include <Arduino.h>
volatile char receiveChar;

void setup(){
  receiveChar = 0;
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  digitalWrite(2,HIGH);
}

void loop(){
  if (Serial.available() > 0) {
    receiveChar = Serial.read();
    if (receiveChar == 'a') {
      digitalWrite(2,LOW);
      Serial.write(255);

    } else if (receiveChar == 'b') {
      digitalWrite(2,HIGH);
      Serial.write(0);
    }

  }

}
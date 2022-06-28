// #include <Arduino.h>
volatile char item;

void setup(){
  item = 0;
  Serial.begin(9600);
  pinMode(2, INPUT);
}

void loop(){
  item = digitalRead(2);
  if (item == 0) {
    Serial.write('a');

  } else {
    Serial.write('b');

  }
  delay(200);
}
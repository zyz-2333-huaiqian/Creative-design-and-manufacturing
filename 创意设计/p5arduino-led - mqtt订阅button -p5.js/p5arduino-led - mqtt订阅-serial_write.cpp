
#include <ESP8266WiFi.h>
WiFiClient client;
#include <PubSubClient.h>

PubSubClient mqttClient(client);

char* mqttServer;
String controlString;

void receiveCallback(char* topic, byte* payload, unsigned int length){
  for (int i = (1); i <= (length); i = i + (1)) {
    Serial.write(char(payload[(int)(i - 1)]));
    controlString = String(controlString) + String(char(payload[(int)(i - 1)]));
  }
  Serial.write("");
  if (controlString == "on") {
    digitalWrite(2,HIGH);

  } else if (controlString == "off") {
    digitalWrite(2,LOW);
  }
}

// 第二步：定义连接到MQTT服务器函数
void connectMQTTServer() {
  String clientId = String("esp8266-") + String(WiFi.macAddress());
  if (mqttClient.connect(clientId.c_str())) {
    Serial.println("MQTT Server Connected.");
    Serial.print("Server Address: ");
    Serial.println(mqttServer);
    Serial.print("ClientId: ");
    Serial.println(clientId);

  } else {
    Serial.print("MQTT Server Connect Failed. Client State:");
    Serial.println(mqttClient.state());
    delay(3000);

  }
}

// 第三步：定义订阅函数
void subscribeTopic(String subTopicString) {
  String topicString = subTopicString;
  char subTopic[topicString.length() + 1];
  strcpy(subTopic,topicString.c_str());
  if (mqttClient.subscribe(subTopic)) {
    Serial.println("Subscrib Topic:");
    Serial.println(subTopic);

  } else {
    Serial.print("Subscribe Fail...");

  }
}

void setup(){
  Serial.begin(9600);
  mqttServer = "test.ranye-iot.net";
  pinMode(2, OUTPUT);
  controlString = "";
  WiFi.begin("hh","12345678");
  // 第一步：连接WiFi
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print('.');
  }
  mqttClient.setServer(mqttServer,1883);
  connectMQTTServer();
  subscribeTopic("andy/control/");
  digitalWrite(2,HIGH);
}

void loop(){
  // 第四步：初始化

  controlString = "";
  // 第五步：死循环，保持心跳
  if (mqttClient.connected()) {
    mqttClient.loop();

  } else {
    connectMQTTServer();

  }
  mqttClient.setCallback(receiveCallback);

}
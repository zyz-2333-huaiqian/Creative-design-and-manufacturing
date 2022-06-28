
#include <ESP8266WiFi.h>
WiFiClient client;
#include <PubSubClient.h>

PubSubClient mqttClient(client);

char *mqttServer;
volatile int btn;

// 第二步：定义连接到MQTT服务器函数
void connectMQTTServer()
{
    String clientId = String("esp8266-") + String(WiFi.macAddress());
    if (mqttClient.connect(clientId.c_str()))
    {
        Serial.println("MQTT Server Connected.");
        Serial.print("Server Address: ");
        Serial.println(mqttServer);
        Serial.print("ClientId: ");
        Serial.println(clientId);
    }
    else
    {
        Serial.print("MQTT Server Connect Failed. Client State:");
        Serial.println(mqttClient.state());
        delay(3000);
    }
}

// 第三步：定义发布函数
void pubMQTTmsg(String topic, String msg)
{
    String topicString = topic;
    char publishTopic[topic.length() + 1];
    strcpy(publishTopic, topicString.c_str());
    String messageString = msg;
    char publishMsg[messageString.length() + 1];
    strcpy(publishMsg, messageString.c_str());
    if (mqttClient.publish(publishTopic, publishMsg))
    {
        Serial.println("Publish Topic:");
        Serial.println(publishTopic);
        Serial.println("Publish message:");
        Serial.println(publishMsg);
    }
    else
    {
        Serial.println("Message Publish Failed.");
    }
}

void setup()
{
    Serial.begin(9600);
    mqttServer = "test.ranye-iot.net";
    btn = 0;
    WiFi.begin("hh", "12345678");
    // 第一步：连接WiFi
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print('.');
    }
    mqttClient.setServer(mqttServer, 1883);
    connectMQTTServer();
    pinMode(2, INPUT);
}

void loop()
{
    // 第四步：初始化

    // 第五步：死循环，保持心跳
    if (mqttClient.connected())
    {
        mqttClient.loop();
    }
    else
    {
        connectMQTTServer();
    }
    btn = digitalRead(2);
    if (btn == 1)
    {
        pubMQTTmsg("zyz/control/", "off");
    }
    else if (btn == 0)
    {
        pubMQTTmsg("zyz/control/", "on");
    }
    delay(1000);
}
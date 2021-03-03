const kafka = require("kafka-node");

Consumer = kafka.Consumer;
client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
consumer = new Consumer(client, [{ topic: "topic1", partition: 0 }], {
  autoCommit: true,
});

consumer.on("message", function (message) {
  console.log(message.value);
});

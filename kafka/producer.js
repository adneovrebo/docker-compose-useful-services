const kafka = require("kafka-node");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });
const producer = new Producer(client);

producer.on("ready", function () {
  console.log("PRODUCER STARTED: Start sending messages");
  sendMessage();
});

function sendMessage() {
  rl.question("", (message) => {
    const payloads = [{ topic: "topic1", messages: message, partition: 0 }];
    producer.send(payloads, function (err, data) {
      if (err) {
        console.log("Error while sending message", err);
      }
    });
    sendMessage();
  });
}

producer.on("error", function (err) {
  console.log("Error", err);
});

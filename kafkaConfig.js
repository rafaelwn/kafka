const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const Producer = kafka.Producer;
const Consumer = kafka.Consumer;

const producer = new Producer(client);
const consumer = new Consumer(client, [{ topic: 'notificacoes' }], {
  autoCommit: false,
});

module.exports = { producer, consumer };

const { producer } = require('./kafkaConfig');

producer.on('ready', () => {
  console.log('Produtor do Kafka está pronto');
});

producer.on('error', (err) => {
  console.error('Erro no produtor do Kafka: ' + err);
});

const sendNotification = (message) => {
  const payloads = [
    {
      topic: 'notificacoes',
      messages: message,
    },
  ];

  producer.send(payloads, (err, data) => {
    if (err) {
      console.error('Erro ao enviar notificação: ' + err);
    } else {
      console.log('Notificação enviada:', data);
    }
  });
};

module.exports = { sendNotification };

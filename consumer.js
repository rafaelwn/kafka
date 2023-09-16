const { consumer } = require('./kafkaConfig');

consumer.on('message', (message) => {
  console.log('Mensagem recebida:', message.value);
});

consumer.on('error', (err) => {
  console.error('Erro no consumidor do Kafka: ' + err);
});

consumer.on('offsetOutOfRange', (err) => {
  console.error('Offset fora de alcance:', err);
});

console.log('Consumidor do Kafka está ouvindo as notificações...');

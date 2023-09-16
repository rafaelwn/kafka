const express = require('express');
const bodyParser = require('body-parser');
const { sendNotification } = require('./producer');

const app = express();
app.use(bodyParser.json());

app.post('/enviar-notificacao', (req, res) => {
  const { mensagem } = req.body;
  sendNotification(mensagem);
  res.send('Notificação enviada com sucesso!');
});

app.listen(3000, () => {
  console.log('Aplicativo web ouvindo na porta 3000');
});

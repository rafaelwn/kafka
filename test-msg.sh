#!/bin/bash

# Define a URL da rota /enviar-notificacao
URL="http://localhost:3000/enviar-notificacao"

# Define o corpo da solicitação POST em JSON
# DATA='{"mensagem": "Esta é uma notificação de teste"}'
DATA='{"mensagem": "Nova msg enviada agora - Mônica"}'

# Realiza a solicitação POST usando o curl
curl -X POST -H "Content-Type: application/json" -d "$DATA" "$URL"

## instalar as dependências
```js
npm install
```

## caso ainda não exista criar a rede para que o zookeeper e kafka possam se comunicar
```shell
docker network ls
docker network create kafka-network
```

## zookeeper
```shell
docker run -d --name zookeeper -p 2181:2181 --network kafka-network zookeeper
```

## kafka
```shell
docker run -d --name kafka \
--network kafka-network -p 9092:9092 \
-e KAFKA_ADVERTISED_HOST_NAME=localhost \
-e KAFKA_ADVERTISED_PORT=9092 \
-e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 \
wurstmeister/kafka
```

## validar a versão do kafka 2.13-2.2.8.1
```shell
docker exec -it kafka /bin/bash/opt
```

## cria o tópico notificacoes no kafka
```shell
docker exec -it kafka /opt/kafka_2.13-2.8.1/bin/kafka-topics.sh \
--create --topic notificacoes \
--partitions 1 --replication-factor 1 \
--bootstrap-server localhost:9092
```

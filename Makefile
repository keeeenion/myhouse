env:
	cp homeassistant/.env-default homeassistant/.env

setup:
	./homeassistant/scripts/setup-mqtt.sh

start:
	docker compose -f homeassistant/docker-compose.yaml --env-file homeassistant/.env up -d

down:
	docker compose -f homeassistant/docker-compose.yaml --env-file homeassistant/.env down

restart: down start

logs:
	docker compose -f homeassistant/docker-compose.yaml --env-file homeassistant/.env logs ${s}

exec:
	docker exec -it homeassistant bash
# Smart housing w/ integrated technology aka SHIT

## Folder structure

* homeassistant - configurations for homeassistant setup
* simulation - Unity project for the simulation

## Running
* Import unity project to unity, read it's README
* Run ```make env``` to create a .env starting point
* Start all the services ```make start```
* Once finished run ```make down```

## Access
* Home assistant can be accessed on http://localhost:8123
* MQTT can be accesed form containers on mqtt://mqtt:8883
* Access homeassistant file system running ```make exec```

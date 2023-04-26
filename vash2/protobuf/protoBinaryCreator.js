const { Entity, Entities } = require('./data_pb');
const fs = require('fs');

const api1 = new Entity();

api1.setName("Twitter");
api1.setEntitytype("api");
api1.setEntityid("1-2-3");
api1.setId(1);

const collection1 = new Entity();

collection1.setName("Spotify");
collection1.setEntitytype("collection");
collection1.setEntityid("1-2-3");
collection1.setId(2);

const entities = new Entities();

entities.addEntities(api1);
entities.addEntities(collection1);

const bytes = entities.serializeBinary();

fs.writeFileSync('data_binary.bin', bytes);
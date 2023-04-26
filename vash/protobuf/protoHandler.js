const Schema = require('./data_pb'),
    fs = require('fs');

try {
    const api1 = new Schema.Entity();

    api1.setId(1);
    api1.setName("Spotify");
    api1.setEntitytype("api");
    api1.setEntityid("1-2-3");
    
    const collection1 = new Schema.Entity();
    
    collection1.setId(2);
    collection1.setName("Twitter");
    collection1.setEntitytype("collection");
    collection1.setEntityid("1-2-4");
    
    const entities = new Schema.Entities();
    
    entities.addEntities(api1);
    entities.addEntities(collection1);
    
    const bytes = entities.serializeBinary();
    
    fs.writeFileSync("data_binary.bin", bytes);
    
    const deserializedEntities = Schema.Entities.deserializeBinary(bytes);
    
    console.log(deserializedEntities.getEntitiesList());
}
catch (err) {
    console.log(err);
}

import data_pb2 as Schema

api1 = Schema.Entity()
api1.id = 1
api1.entityId = "1-2-3"
api1.name = "Spotify"
api1.entityType = "api"

collection1 = Schema.Entity()
collection1.id = 2
collection1.entityId = "1-2-4"
collection1.name = "Twitter"
collection1.entityType = "collection"

entities = Schema.Entities()

entities.entities.extend([api1, collection1])

with open("./data_binary", "rb") as fd:
    fileContents = str(fd.read, 'ascii')
    x = Schema.Entities().ParseFromString(fileContents)

    print(x)

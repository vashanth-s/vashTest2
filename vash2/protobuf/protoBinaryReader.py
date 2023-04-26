import data_pb2 as Schema

entities = Schema.Entities()

with open("data_binary.bin", "rb") as fd:
    fileContents = fd.read()

    entities.ParseFromString(fileContents)

    print(entities)



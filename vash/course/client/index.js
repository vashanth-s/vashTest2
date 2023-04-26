const grpc = require('@grpc/grpc-js'),
    address = 'localhost:50051',
    { GreetServiceClient } = require('../proto/greet_grpc_pb');

const main = () => {
    const credentials = grpc.ChannelCredentials.createInsecure();
    const client = new GreetServiceClient(address, credentials);

    client.close();
};

main();





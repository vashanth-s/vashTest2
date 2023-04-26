const grpc = require('@grpc/grpc-js'),
    address = 'localhost:50051',
    { PrimeServiceClient } = require('../proto/prime_grpc_pb'),
    { Request } = require('../proto/prime_pb');

const decompose = (client) => {
    const req = new Request().setNumber(100);

    client.decompose(req).on('data', (res) => {
        console.log('Showing the data from client: ', res.getResult());
    });
};

const main = () => {
    const credentials = grpc.ChannelCredentials.createInsecure();
    const client = new PrimeServiceClient(address, credentials);

    decompose(client);

    client.close();
};

main();





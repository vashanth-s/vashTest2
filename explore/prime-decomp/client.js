const { Request } = require('./prime_pb');
const grpc = require('@grpc/grpc-js');
const { PrimeServiceClient } = require('./prime_grpc_pb');

const main = () => {
    const client = new PrimeServiceClient('localhost:5001', grpc.ChannelCredentials.createInsecure());

    const req = new Request().setNumber(10);

    client.decompose(req).on('data', (res) => console.log(res.getResult()));

    client.close();
}

main();
const grpc = require('@grpc/grpc-js');
const serverImpl = require('./server_impl');
const { PrimeServiceService } = require('./prime_grpc_pb');

const cleanup = (server) => {
    if (server) {
        server.forceShutdown();
    }
}

const main = () => {
    const server = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure();

    server.addService(PrimeServiceService, serverImpl);

    server.bindAsync('localhost:5001', creds, (err, _) => {
        if (err) {
            cleanup(server);
        }

        server.start();
    });
};

main();
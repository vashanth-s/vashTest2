const grpc = require('@grpc/grpc-js'),
    serverImpl = require('./service_impl'),
    { PrimeServiceService } = require('../proto/prime_grpc_pb'),
    address = 'localhost:50051';

const cleanup = (server) => {
    if (server) {
        console.log('Cleanup...');
        server.forceShutdown();
    }
}

(() => {
    const server = new grpc.Server(),
        creds = grpc.ServerCredentials.createInsecure();

    process.on('SIGINT', () => {
        console.log('Terminating...');
        cleanup(server);
    });
    
    server.addService(PrimeServiceService, serverImpl);
    server.bindAsync(address, creds, (err, _) => {
        if (err) {
            cleanup(server);
        }

        server.start();
    });

    console.log('Listening on : ', address);
})();
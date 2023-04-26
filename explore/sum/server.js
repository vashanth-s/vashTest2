const grpc = require('@grpc/grpc-js');
const address = 'localhost:5001';
const serverImplementation = require('./server_impl');
const { SumService } = require('./sum_grpc_pb');

const cleanup = (server) => {
    if (server) {
        console.log('Cleaning up...');
        server.forceShutdown();
    }
};

const main = () => {
    const creds = grpc.ServerCredentials.createInsecure();
    const server = new grpc.Server();
  
    process.on('SIGINT', () => {
        console.log('Terminating...');
        cleanup(server);
    });

    server.addService(SumService, serverImplementation);
    server.bindAsync(address, creds, (err, _) => {
        if (err) {
            server.cleanup();
        }

        server.start();
    });

    console.log('Listening on : ', address)
};

main();
const grpc = require('@grpc/grpc-js');
const { ExampleService } = require('./data_grpc_pb');
const { Response } = require('./data_pb');

const cleanup = (server) => {
    if (server) {
        console.log('Cleaning up...');
        server.forceShutdown();
    }
}

const serverImplementation = () => {
    return {
        callString: async (call) => {
            for (const x of [...Array(100).keys()]) {
                call.write(new Response().setResult("Hello world"));

                await new Promise((resolve) => setTimeout(resolve, 100));
            }

            call.end();
        }
    }; 
}

const main = () => {
    const server = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure();
    const address = 'localhost:5001';

    process.on('SIGINT', () => {
        console.log('Terminating...');
        cleanup(server);
    });

    server.addService(ExampleService, serverImplementation());
    server.bindAsync(address, creds, (err) => {
        if (err) {
            cleanup(server);
        }

        server.start();
        console.log('Listening on ' + address);
    });
};  

main();
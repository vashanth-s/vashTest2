const grpc = require('@grpc/grpc-js'),
    serverImpl = require('./service_impl'),
    { GreetServiceService } = require('../proto/greet_grpc_pb'),
    address = 'localhost:50051',
    fs = require('fs');

const cleanup = (server) => {
    if (server) {
        console.log('Cleanup...');
        server.forceShutdown();
    }
}

(() => {
    let server = new grpc.Server(),   
        tls = false;

    if (tls) {
        const rootCert = fs.readFileSync('./package.json');
        const certChain = fs.readFileSync('./ssl/server.crt');
        const privateKey = fs.readFileSync('./ssl/server.pem');

        creds = grpc.ChannelCredentials.createSsl(rootCert, {
            cert_chain: certChain,
            private_key: privateKey
        });
    }
    else {
        creds = grpc.ServerCredentials.createInsecure();
    }

    process.on('SIGINT', () => {
        console.log('Terminating...');
        cleanup(server);
    });
    
    server.addService(GreetServiceService, serverImpl);
    server.bindAsync(address, creds, (err, _) => {
        if (err) {
            cleanup(server);
        }

        server.start();
    });

    console.log('Listening on : ', address);
})();
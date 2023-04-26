const grpc = require('@grpc/grpc-js');
const { CombinedServiceService } = require('../proto/combined_grpc_pb');
const { SumResult } = require('../proto/sum_pb');
const { SumEvenResult } = require('../proto/sumeven_pb');
const { OddNumber } = require('../proto/sumodd_pb');

const cleanup = (server) => {
    if (server) {
        console.log('Cleaning up...');
        server.forceShutdown();
    }
}

const serverImplementation = () => {
    return {
        // Unary
        getSum: (call, cb) => {
            const a = call.request.getA();
            const b = call.request.getB();
            const sum = a + b;

            const res = new SumResult();

            res.setResult(sum);

            cb(null, res);
        },

        // Client streaming
        getSumOfEvenNumbers: (call, cb) => {
            let result = 0;

            call.on('data', (req) => {
                if (req.getNumber()%2==0) {
                    result += req.getNumber();   
                }
            })
        
            call.on('end', () => {
                cb(null, new SumEvenResult().setResult(result));
            })
        },

        // Server streaming
        getSumOfOddNumbers: (call, cb) => {
            const arr = call.request.getArrList();

            for (let i=0;i<arr.length;i++) {
                if (arr[i]%2!=0) {
                    const req = new OddNumber();
                    
                    req.setOddnumber(arr[i]);
                    call.write(req);
                }
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

    server.addService(CombinedServiceService, serverImplementation());
    server.bindAsync(address, creds, (err) => {
        if (err) {
            cleanup(server);
        }

        server.start();
        console.log('Listening on ' + address);
    });
};  

main();
const grpc = require('@grpc/grpc-js');
const { SumClient } = require('./sum_grpc_pb');
const serverAddress = 'localhost:5001'; 
const { Operands } = require('./sum_pb');

const main = () => {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new SumClient(serverAddress, creds);

    const req = new Operands();

    req.setNum1(10).setNum2(2);

    client.getSum(req, (err, res) => {
        if (err) {
            console.log('Client error: ', err);
        }

        console.log('Result from client: ', res.getResult());
    });
};

main();
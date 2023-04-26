const grpc = require('@grpc/grpc-js');
const { CombinedServiceClient } = require('../proto/combined_grpc_pb');
const { Operands } = require('../proto/sum_pb');
const { StreamNumbers } = require('../proto/sumeven_pb');
const { StreamArray } = require('../proto/sumodd_pb');

const executeSum = (client) => {
    const req = new Operands();

    req.setA(5);
    req.setB(10);

    client.getSum(req, (err, res) => {
        if (err) {
            console.log(err);
        }

        console.log('The resultant is: ', res.getResult());
    });
}

const executeSumOfEvenNumbers = (client) => {
    const call = client.getSumOfEvenNumbers((err, res) => {
        if (!err) {
            console.log(res.getResult(), ': Resultant from client finally');
        }
    });

    [1,2,3,4,5,6,7,8,9].map((num) => {
        const req = new StreamNumbers();

        req.setNumber(num);
        call.write(req);
    });

    call.end();
}

const executeSumOfOddNumbers = (client) => {
    const req = new StreamArray();

    req.setArrList([1,2,3,4,5,6,7,8,9,10]);

    const call = client.getSumOfOddNumbers(req);

    call.on('data', (res) => {
        console.log(res.getOddnumber());
    })
}

const main = () => {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new CombinedServiceClient('localhost:5001', creds);

    executeSumOfOddNumbers(client);

    client.close();
}

main();
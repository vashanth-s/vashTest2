const grpc = require('@grpc/grpc-js');
const { Request } = require('./data_pb');
const { ExampleClient } = require('./data_grpc_pb');

const executeCallString = (client) => {
    const req = new Request();
    const t1 = Date.now();

    req.setMsg("WTF");

    const call = client.callString(req);

    call.on('data', (res) => {
        console.log(res.getResult());
    })

    call.on('end', () => {
        console.log(Date.now() - t1);
    })
}

const main = () => {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new ExampleClient('localhost:5001', creds);

    executeCallString(client);

    client.close();
}

main();
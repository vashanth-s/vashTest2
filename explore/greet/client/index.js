const grpc = require('@grpc/grpc-js'),
    address = 'localhost:50051',
    { GreetServiceClient } = require('../proto/greet_grpc_pb'),
    { GreetRequest } = require('../proto/greet_pb');

const doGreet = (client) => {
    const req = new GreetRequest().setFirstName("Vashanth");

    client.greet(req, (err, res) => {
        if (err) {
            return console.log(err);
        }
        
        console.log(`Greet: ${res.getResult()}`);
    });
}

const doGreetManyTimes = (client) => {
    const req = new GreetRequest().setFirstName("Vashanth");

    client.greetManyTimes(req).on('data', (res) => {
        console.log('Showing the data from client: ', res.getResult());
    });
};

const doLongGreet = (client) => {
    const req = new GreetRequest();

    const call = client.longGreet(req, (err, res) => {
        if (!err) {
            console.log(res.getResult(), ': Resultant from client finally');
        }
    });

    ["Vashanth", "Saravanan"].map((name) => {
        req.setFirstName(name);
        call.write(req);
    });

    call.end();
}

const doGreetEveryone = (client) => {
    const req = new GreetRequest();

    const call = client.greetEveryone();
    
    call.on('data', (res) => {
        console.log(`Got from client : ${res.getResult()}`);
    });

    ["Vashanth", "Saravanan"].map((name) => {
        req.setFirstName(name);
        call.write(req);
    });

    call.end();
}

const doGreetWithDeadline = (client, ms) => {
    const req = new GreetRequest();

    client.greetWithDeadline(req, {
        deadline: Date.now() + ms
    }, (err, res) => {
        if (err) {
            return console.log(err);
        }

        console.log(res);
    });
}

const main = () => {
    const credentials = grpc.ChannelCredentials.createInsecure();
    const client = new GreetServiceClient(address, credentials);

    doLongGreet(client);

    client.close();
};

main();





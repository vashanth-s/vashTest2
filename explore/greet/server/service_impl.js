const { GreetResponse } = require('../proto/greet_pb');  
const grpc = require('@grpc/grpc-js');

exports.greet = (call, cb) => {
    if (call.request.getFirstName() === "Random") {
        return cb({
            status: grpc.status.INVALID_ARGUMENT,
            message: "Should be a name"
        });
    }

    const result = `Hello ${call.request.getFirstName()}`;

    const res = new GreetResponse();
    
    res.setResult(result);

    cb(null, res);
}

exports.greetManyTimes = (call) => {
    const res = new GreetResponse();

    for (let i=0; i<10; i++) {
        res.setResult(`Setting result ${i+1} - ${call.request.getFirstName()}`);
        call.write(res);
    }

    call.end();
}

exports.longGreet = (call, cb) => {
    let result = '';

    call.on('data', (req) => {
        result += req.getFirstName() + ' : ';
    })

    call.on('end', () => {
        cb(null, new GreetResponse().setResult(result));
    })
}

exports.greetEveryone = (call) => {
    call.on('data', (req) => {
        console.log(`Received request from client on server: ${req.getFirstName()}`);

        const res = new GreetResponse();

        res.setResult(`${req.getFirstName()} : Sending from Service`);

        call.write(res);
    })

    call.on('end', call.end)
}

exports.greetWithDeadline = async (call, cb) => {
    for (let i=0;i<3;i++) {
        if (call.cancelled) {
            return console.log('Client cancelled the request!');
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    const res = new GreetResponse().setResult(`Hello : ${call.request.getFirstName()}`);

    cb(null, res);
}
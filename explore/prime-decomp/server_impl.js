const { Response } = require('./prime_pb');

exports.decompose = (call) => {
    const res = new Response();

    for (let i=0;i<10;i++) {
        res.setResult(`Hello: ${i+1} from server: ${call.request.getNumber()}`);

        call.write(res);
    }

    call.end();
}
const { Response } = require('../proto/prime_pb');  

exports.decompose = (call) => {
    const res = new Response();

    for (let i=0; i<10; i++) {
        res.setResult(`Setting result ${i+1} - ${call.request.getNumber()}`);
        call.write(res);
    }

    call.end();
}
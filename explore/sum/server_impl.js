const { Result } = require('./sum_pb');

exports.getSum = (req, cb) => {
    const sum = req.request.getNum1() + req.request.getNum2();
    const res = new Result().setResult(sum);

    return cb(null, res);
}
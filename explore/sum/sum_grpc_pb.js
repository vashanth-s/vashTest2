// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sum_pb = require('./sum_pb.js');

function serialize_Operands(arg) {
  if (!(arg instanceof sum_pb.Operands)) {
    throw new Error('Expected argument of type Operands');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Operands(buffer_arg) {
  return sum_pb.Operands.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Result(arg) {
  if (!(arg instanceof sum_pb.Result)) {
    throw new Error('Expected argument of type Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Result(buffer_arg) {
  return sum_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}


var SumService = exports.SumService = {
  getSum: {
    path: '/Sum/getSum',
    requestStream: false,
    responseStream: false,
    requestType: sum_pb.Operands,
    responseType: sum_pb.Result,
    requestSerialize: serialize_Operands,
    requestDeserialize: deserialize_Operands,
    responseSerialize: serialize_Result,
    responseDeserialize: deserialize_Result,
  },
};

exports.SumClient = grpc.makeGenericClientConstructor(SumService);

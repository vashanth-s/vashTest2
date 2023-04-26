// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var prime_pb = require('./prime_pb.js');

function serialize_greet_Request(arg) {
  if (!(arg instanceof prime_pb.Request)) {
    throw new Error('Expected argument of type greet.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_Request(buffer_arg) {
  return prime_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_Response(arg) {
  if (!(arg instanceof prime_pb.Response)) {
    throw new Error('Expected argument of type greet.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_Response(buffer_arg) {
  return prime_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var PrimeServiceService = exports.PrimeServiceService = {
  decompose: {
    path: '/greet.PrimeService/decompose',
    requestStream: false,
    responseStream: true,
    requestType: prime_pb.Request,
    responseType: prime_pb.Response,
    requestSerialize: serialize_greet_Request,
    requestDeserialize: deserialize_greet_Request,
    responseSerialize: serialize_greet_Response,
    responseDeserialize: deserialize_greet_Response,
  },
};

exports.PrimeServiceClient = grpc.makeGenericClientConstructor(PrimeServiceService);

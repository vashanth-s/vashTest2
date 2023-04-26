// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var data_pb = require('./data_pb.js');

function serialize_Request(arg) {
  if (!(arg instanceof data_pb.Request)) {
    throw new Error('Expected argument of type Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Request(buffer_arg) {
  return data_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response(arg) {
  if (!(arg instanceof data_pb.Response)) {
    throw new Error('Expected argument of type Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response(buffer_arg) {
  return data_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleService = exports.ExampleService = {
  callString: {
    path: '/Example/callString',
    requestStream: false,
    responseStream: true,
    requestType: data_pb.Request,
    responseType: data_pb.Response,
    requestSerialize: serialize_Request,
    requestDeserialize: deserialize_Request,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
};

exports.ExampleClient = grpc.makeGenericClientConstructor(ExampleService);

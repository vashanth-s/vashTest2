// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var sum_pb = require('./sum_pb.js');
var sumeven_pb = require('./sumeven_pb.js');
var sumodd_pb = require('./sumodd_pb.js');

function serialize_OddNumber(arg) {
  if (!(arg instanceof sumodd_pb.OddNumber)) {
    throw new Error('Expected argument of type OddNumber');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OddNumber(buffer_arg) {
  return sumodd_pb.OddNumber.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Operands(arg) {
  if (!(arg instanceof sum_pb.Operands)) {
    throw new Error('Expected argument of type Operands');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Operands(buffer_arg) {
  return sum_pb.Operands.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StreamArray(arg) {
  if (!(arg instanceof sumodd_pb.StreamArray)) {
    throw new Error('Expected argument of type StreamArray');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StreamArray(buffer_arg) {
  return sumodd_pb.StreamArray.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StreamNumbers(arg) {
  if (!(arg instanceof sumeven_pb.StreamNumbers)) {
    throw new Error('Expected argument of type StreamNumbers');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_StreamNumbers(buffer_arg) {
  return sumeven_pb.StreamNumbers.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SumEvenResult(arg) {
  if (!(arg instanceof sumeven_pb.SumEvenResult)) {
    throw new Error('Expected argument of type SumEvenResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SumEvenResult(buffer_arg) {
  return sumeven_pb.SumEvenResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SumResult(arg) {
  if (!(arg instanceof sum_pb.SumResult)) {
    throw new Error('Expected argument of type SumResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SumResult(buffer_arg) {
  return sum_pb.SumResult.deserializeBinary(new Uint8Array(buffer_arg));
}


var CombinedServiceService = exports.CombinedServiceService = {
  getSum: {
    path: '/combined.CombinedService/getSum',
    requestStream: false,
    responseStream: false,
    requestType: sum_pb.Operands,
    responseType: sum_pb.SumResult,
    requestSerialize: serialize_Operands,
    requestDeserialize: deserialize_Operands,
    responseSerialize: serialize_SumResult,
    responseDeserialize: deserialize_SumResult,
  },
  getSumOfEvenNumbers: {
    path: '/combined.CombinedService/getSumOfEvenNumbers',
    requestStream: true,
    responseStream: false,
    requestType: sumeven_pb.StreamNumbers,
    responseType: sumeven_pb.SumEvenResult,
    requestSerialize: serialize_StreamNumbers,
    requestDeserialize: deserialize_StreamNumbers,
    responseSerialize: serialize_SumEvenResult,
    responseDeserialize: deserialize_SumEvenResult,
  },
  getSumOfOddNumbers: {
    path: '/combined.CombinedService/getSumOfOddNumbers',
    requestStream: false,
    responseStream: true,
    requestType: sumodd_pb.StreamArray,
    responseType: sumodd_pb.OddNumber,
    requestSerialize: serialize_StreamArray,
    requestDeserialize: deserialize_StreamArray,
    responseSerialize: serialize_OddNumber,
    responseDeserialize: deserialize_OddNumber,
  },
};

exports.CombinedServiceClient = grpc.makeGenericClientConstructor(CombinedServiceService);

// Original file: src/proto/pix-key.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { FindOnePixKeyRequest as _pixKey_FindOnePixKeyRequest, FindOnePixKeyRequest__Output as _pixKey_FindOnePixKeyRequest__Output } from '../pixKey/FindOnePixKeyRequest';
import type { FindOnePixKeyResponse as _pixKey_FindOnePixKeyResponse, FindOnePixKeyResponse__Output as _pixKey_FindOnePixKeyResponse__Output } from '../pixKey/FindOnePixKeyResponse';
import type { RegisterPixKeyRequest as _pixKey_RegisterPixKeyRequest, RegisterPixKeyRequest__Output as _pixKey_RegisterPixKeyRequest__Output } from '../pixKey/RegisterPixKeyRequest';
import type { RegisterPixKeyResponse as _pixKey_RegisterPixKeyResponse, RegisterPixKeyResponse__Output as _pixKey_RegisterPixKeyResponse__Output } from '../pixKey/RegisterPixKeyResponse';

export interface PixKeyServiceClient extends grpc.Client {
  FindOnePixKey(argument: _pixKey_FindOnePixKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pixKey_FindOnePixKeyResponse__Output>): grpc.ClientUnaryCall;
  FindOnePixKey(argument: _pixKey_FindOnePixKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pixKey_FindOnePixKeyResponse__Output>): grpc.ClientUnaryCall;
  FindOnePixKey(argument: _pixKey_FindOnePixKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pixKey_FindOnePixKeyResponse__Output>): grpc.ClientUnaryCall;
  FindOnePixKey(argument: _pixKey_FindOnePixKeyRequest, callback: grpc.requestCallback<_pixKey_FindOnePixKeyResponse__Output>): grpc.ClientUnaryCall;
  findOnePixKey(argument: _pixKey_FindOnePixKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pixKey_FindOnePixKeyResponse__Output>): grpc.ClientUnaryCall;
  findOnePixKey(argument: _pixKey_FindOnePixKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pixKey_FindOnePixKeyResponse__Output>): grpc.ClientUnaryCall;
  findOnePixKey(argument: _pixKey_FindOnePixKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pixKey_FindOnePixKeyResponse__Output>): grpc.ClientUnaryCall;
  findOnePixKey(argument: _pixKey_FindOnePixKeyRequest, callback: grpc.requestCallback<_pixKey_FindOnePixKeyResponse__Output>): grpc.ClientUnaryCall;
  
  RegisterPixKey(argument: _pixKey_RegisterPixKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pixKey_RegisterPixKeyResponse__Output>): grpc.ClientUnaryCall;
  RegisterPixKey(argument: _pixKey_RegisterPixKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pixKey_RegisterPixKeyResponse__Output>): grpc.ClientUnaryCall;
  RegisterPixKey(argument: _pixKey_RegisterPixKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pixKey_RegisterPixKeyResponse__Output>): grpc.ClientUnaryCall;
  RegisterPixKey(argument: _pixKey_RegisterPixKeyRequest, callback: grpc.requestCallback<_pixKey_RegisterPixKeyResponse__Output>): grpc.ClientUnaryCall;
  registerPixKey(argument: _pixKey_RegisterPixKeyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pixKey_RegisterPixKeyResponse__Output>): grpc.ClientUnaryCall;
  registerPixKey(argument: _pixKey_RegisterPixKeyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_pixKey_RegisterPixKeyResponse__Output>): grpc.ClientUnaryCall;
  registerPixKey(argument: _pixKey_RegisterPixKeyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_pixKey_RegisterPixKeyResponse__Output>): grpc.ClientUnaryCall;
  registerPixKey(argument: _pixKey_RegisterPixKeyRequest, callback: grpc.requestCallback<_pixKey_RegisterPixKeyResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PixKeyServiceHandlers extends grpc.UntypedServiceImplementation {
  FindOnePixKey: grpc.handleUnaryCall<_pixKey_FindOnePixKeyRequest__Output, _pixKey_FindOnePixKeyResponse>;
  
  RegisterPixKey: grpc.handleUnaryCall<_pixKey_RegisterPixKeyRequest__Output, _pixKey_RegisterPixKeyResponse>;
  
}

export interface PixKeyServiceDefinition extends grpc.ServiceDefinition {
  FindOnePixKey: MethodDefinition<_pixKey_FindOnePixKeyRequest, _pixKey_FindOnePixKeyResponse, _pixKey_FindOnePixKeyRequest__Output, _pixKey_FindOnePixKeyResponse__Output>
  RegisterPixKey: MethodDefinition<_pixKey_RegisterPixKeyRequest, _pixKey_RegisterPixKeyResponse, _pixKey_RegisterPixKeyRequest__Output, _pixKey_RegisterPixKeyResponse__Output>
}

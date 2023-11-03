import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PixKeyServiceClient as _pixKey_PixKeyServiceClient, PixKeyServiceDefinition as _pixKey_PixKeyServiceDefinition } from './pixKey/PixKeyService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  pixKey: {
    FindOnePixKeyRequest: MessageTypeDefinition
    FindOnePixKeyResponse: MessageTypeDefinition
    PixKeyService: SubtypeConstructor<typeof grpc.Client, _pixKey_PixKeyServiceClient> & { service: _pixKey_PixKeyServiceDefinition }
    RegisterPixKeyRequest: MessageTypeDefinition
    RegisterPixKeyResponse: MessageTypeDefinition
  }
}


import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType as PixKeyProtoGrpcType } from './proto/stubs/pix-key';

const packageDefinition = protoLoader.loadSync('./src/proto/pix-key.proto');
const pixKeyGrpcObject = grpc.loadPackageDefinition(packageDefinition) as unknown as PixKeyProtoGrpcType;


export const pixKeyService = pixKeyGrpcObject.pixKey;
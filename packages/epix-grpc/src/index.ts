import grpc from '@grpc/grpc-js';
import { pixKeyService } from '@epix/grpc-loader';

export const server = () => {
  const server = new grpc.Server();

  server.addService(pixKeyService.PixKeyService.service, {
    'RegisterPixKey': () => {}
  });
};

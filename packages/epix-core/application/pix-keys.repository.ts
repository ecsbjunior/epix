import { PixKey, PixKeyKind } from '../domain/pix-key.mode';

export interface IPixKeysRepository {
  findOneByKind(kind: PixKeyKind): Promise<PixKey>;
  register(pixKey: PixKey): Promise<void>;
}

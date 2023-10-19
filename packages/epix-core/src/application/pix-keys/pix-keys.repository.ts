import { PixKeyKind, PixKey } from '@epix/core/domain/pix-key.mode';

export interface IPixKeysRepository {
  findOneByKind(key: string, kind: PixKeyKind): Promise<PixKey>;
  save(pixKey: PixKey): Promise<void>;
}

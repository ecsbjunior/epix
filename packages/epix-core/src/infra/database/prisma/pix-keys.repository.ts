import { PrismaClient } from '@prisma/client';
import { IPixKeysRepository } from '@epix/core/application/pix-keys.repository';
import { PixKeyKind, PixKey, PixKeyStatus } from '@epix/core/domain/pix-key.mode';

export class PixKeysRepository implements IPixKeysRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findOneByKind(key: string, kind: PixKeyKind): Promise<PixKey> {
    const pixKey = await this.prisma.pixKeys.findFirst({ where: { key, kind } });

    if (!pixKey) {
      throw new Error('PixKey does not exits');
    }

    return PixKey.load({
      id: pixKey.id,
      key: pixKey.key,
      kind: pixKey.kind as PixKeyKind,
      status: pixKey.status as PixKeyStatus,
      accountId: pixKey.account_id,
      createdAt: pixKey.created_at,
      updatedAt: pixKey.updated_at,
    });
  }

  async save(pixKey: PixKey): Promise<void> {
    await this.prisma.pixKeys.create({
      data: {
        id: pixKey.id,
        key: pixKey.key,
        kind: pixKey.kind,
        status: pixKey.status,
        account_id: pixKey.accountId,
        created_at: pixKey.createdAt,
        updated_at: pixKey.updatedAt,
      },
    });
  }
}

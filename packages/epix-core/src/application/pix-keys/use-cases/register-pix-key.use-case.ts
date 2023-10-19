import { PixKey, PixKeyKind } from '@epix/core/domain/pix-key.mode';
import { IAccountsRepository } from '@epix/core/application/accounts.repository';
import { IPixKeysRepository } from '@epix/core/application/pix-keys/pix-keys.repository';

export class RegisterPixKeyUseCase {
  constructor(
    private readonly pixKeysRepository: IPixKeysRepository,
    private readonly accountsRepository: IAccountsRepository
  ) {}

  async execute(key: string, kind: string, accountId: string): Promise<PixKey> {
    const account = await this.accountsRepository.findOne(accountId);

    if (!account) {
      throw new Error('Account does not exists');
    }

    const pixKey = PixKey.create({
      key,
      kind: PixKeyKind[kind as keyof typeof PixKeyKind],
      accountId,
    });

    await this.pixKeysRepository.save(pixKey);

    return pixKey;
  }
}

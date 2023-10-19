import { PixKeyKind } from '@epix/core/domain/pix-key.mode';
import { Transaction } from '@epix/core/domain/transaction.model';
import { IAccountsRepository } from '@epix/core/application/accounts.repository';
import { IPixKeysRepository } from '@epix/core/application/pix-keys/pix-keys.repository';
import { ITransactionsRepository } from '@epix/core/application/transactions/transactions.repository';

type RegisterTransactionUseCaseInput = {
  amount: number;
  description: string;
  toPixKey: string;
  toPixKeyKind: PixKeyKind;
  accountId: string;
};

export class RegisterTransactionUseCase {
  constructor(
    private readonly transactionsRepository: ITransactionsRepository,
    private readonly pixKeysRepository: IPixKeysRepository,
    private readonly accountsRepository: IAccountsRepository
  ) {}

  async execute({ amount, description, toPixKey, toPixKeyKind, accountId }: RegisterTransactionUseCaseInput) {
    const account = await this.accountsRepository.findOne(accountId);

    if (!account) {
      throw new Error('Account does not exists');
    }

    const pixKey = await this.pixKeysRepository.findOneByKind(toPixKey, toPixKeyKind);

    if (!pixKey) {
      throw new Error('Pix Key does not exists');
    }

    const transaction = Transaction.create({
      amount,
      description,
      toPixKeyId: pixKey.id,
      fromAccountId: account.id,
    });

    await this.transactionsRepository.save(transaction);
  }
}

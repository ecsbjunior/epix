import { Account } from '@epix/core/domain/account.mode';

export interface IAccountsRepository {
  findOne(id: string): Promise<Account | undefined>;
  save(account: Account): Promise<void>;
}

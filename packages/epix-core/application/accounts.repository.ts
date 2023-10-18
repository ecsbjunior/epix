import { Account } from '../domain/account.mode';

export interface IAccountsRepository {
  findOne(id: string): Promise<Account>;
  save(account: Account): Promise<void>;
}

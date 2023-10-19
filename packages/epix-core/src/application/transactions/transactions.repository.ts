import { Transaction } from '@epix/core/domain/transaction.model';

export interface ITransactionsRepository {
  findOne(id: string): Promise<Transaction>;
  save(transaction: Transaction): Promise<void>;
}

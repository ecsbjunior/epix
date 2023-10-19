import { Bank } from '@epix/core/domain/bank.model';

export interface IBanksRepository {
  save(bank: Bank): Promise<void>;
}

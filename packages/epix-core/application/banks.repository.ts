import { Bank } from '../domain/bank.model';

export interface IBanksRepository {
  save(bank: Bank): Promise<void>;
}

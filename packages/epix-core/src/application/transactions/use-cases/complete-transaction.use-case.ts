import { ITransactionsRepository } from '@epix/core/application/transactions/transactions.repository';

export class CompleteTransactionUseCase {
  constructor(private readonly transactionsRepository: ITransactionsRepository) {}

  async execute(transactionId: string) {
    const transaction = await this.transactionsRepository.findOne(transactionId);

    if (!transaction) {
      throw new Error('Transaction does not exists');
    }

    transaction.complete();

    await this.transactionsRepository.save(transaction);
  }
}

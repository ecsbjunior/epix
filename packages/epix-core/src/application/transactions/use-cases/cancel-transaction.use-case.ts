import { ITransactionsRepository } from '@epix/core/application/transactions/transactions.repository';

export class CancelTransactionUseCase {
  constructor(private readonly transactionsRepository: ITransactionsRepository) {}

  async execute(transactionId: string, cancellationReason: string) {
    const transaction = await this.transactionsRepository.findOne(transactionId);

    if (!transaction) {
      throw new Error('Transaction does not exists');
    }

    transaction.cancel({
      cancellationReason,
    });

    await this.transactionsRepository.save(transaction);
  }
}

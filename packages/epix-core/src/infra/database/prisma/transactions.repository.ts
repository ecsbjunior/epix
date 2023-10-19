import { PrismaClient } from '@prisma/client';
import { Transaction, TransactionStatus } from '@epix/core/domain/transaction.model';
import { ITransactionsRepository } from '@epix/core/application/transactions/transactions.repository';

export class TransactionsRepository implements ITransactionsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findOne(id: string): Promise<Transaction> {
    const transaction = await this.prisma.transactions.findUnique({ where: { id } });

    if (!transaction) {
      throw new Error('Transaction does not exits');
    }

    return Transaction.load({
      id: transaction.id,
      amount: transaction.amount,
      status: transaction.status as TransactionStatus,
      description: transaction.description,
      cancellationReason: transaction.cancellation_reason ?? undefined,
      toPixKeyId: transaction.to_pix_key_id,
      fromAccountId: transaction.from_account_id,
      createdAt: transaction.created_at,
      updatedAt: transaction.updated_at,
    });
  }

  async save(transaction: Transaction): Promise<void> {
    await this.prisma.transactions.upsert({
      update: {
        amount: transaction.amount,
        status: transaction.status,
        description: transaction.description,
        cancellation_reason: transaction.cancellationReason,
        updated_at: transaction.updatedAt,
      },
      create: {
        id: transaction.id,
        amount: transaction.amount,
        status: transaction.status,
        description: transaction.description,
        cancellation_reason: transaction.cancellationReason,
        to_pix_key_id: transaction.toPixKeyId,
        from_account_id: transaction.fromAccountId,
        created_at: transaction.createdAt,
        updated_at: transaction.updatedAt,
      },
      where: {
        id: transaction.id,
      },
    });
  }
}

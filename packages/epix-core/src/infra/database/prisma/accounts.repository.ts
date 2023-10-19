import { PrismaClient } from '@prisma/client';
import { Account } from '@epix/core/domain/account.mode';
import { IAccountsRepository } from '@epix/core/application/accounts.repository';

export class AccountsRepository implements IAccountsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findOne(id: string): Promise<Account | undefined> {
    const account = await this.prisma.accounts.findUnique({ where: { id } });

    if (!account) {
      return;
    }

    return Account.load({
      id: account.id,
      owner: account.owner,
      number: account.number,
      bankId: account.bank_id,
      createdAt: account.created_at,
      updatedAt: account.updated_at,
    });
  }

  async save(account: Account): Promise<void> {
    await this.prisma.accounts.upsert({
      update: {
        owner: account.owner,
        number: account.number,
        bank_id: account.bankId,
        updated_at: account.updatedAt,
      },
      create: {
        id: account.id,
        owner: account.owner,
        number: account.number,
        bank_id: account.bankId,
        created_at: account.createdAt,
        updated_at: account.updatedAt,
      },
      where: {
        id: account.id,
      },
    });
  }
}

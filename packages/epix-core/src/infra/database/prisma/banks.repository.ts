import { PrismaClient } from '@prisma/client';
import { Bank } from '@epix/core/domain/bank.model';
import { IBanksRepository } from '@epix/core/application/banks.repository';

export class BanksRepository implements IBanksRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(bank: Bank): Promise<void> {
    await this.prisma.banks.upsert({
      update: {
        code: bank.code,
        name: bank.name,
        updated_at: bank.updatedAt,
      },
      create: {
        id: bank.id,
        code: bank.code,
        name: bank.name,
        created_at: bank.createdAt,
        updated_at: bank.updatedAt,
      },
      where: {
        id: bank.id,
      },
    });
  }
}

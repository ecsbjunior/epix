import { Base } from './base.model';

type TransactionProps = Omit<Transaction, 'complete' | 'cancel'>;
type CreateTransactionProps = Pick<Transaction, 'amount' | 'description' | 'toPixKeyId' | 'fromAccountId'>;
type CancelProps = Pick<Transaction, 'cancellationReason'>;

export enum TransactionStatus {
  ERROR = 'ERROR',
  PENDING = 'PENDING',
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
}

export class Transaction extends Base {
  amount: number;
  status: TransactionStatus;
  description: string;
  cancellationReason?: string;
  toPixKeyId: string;
  fromAccountId: string;

  private constructor(props: TransactionProps) {
    super(props);

    this.amount = props.amount;
    this.status = props.status;
    this.description = props.description;
    this.cancellationReason = props.cancellationReason;
    this.toPixKeyId = props.toPixKeyId;
    this.fromAccountId = props.fromAccountId;
  }

  static create(props: CreateTransactionProps) {
    const transaction = new Transaction({
      id: crypto.randomUUID(),
      amount: props.amount,
      status: TransactionStatus.PENDING,
      description: props.description,
      toPixKeyId: props.toPixKeyId,
      fromAccountId: props.fromAccountId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    transaction.#validate();

    return transaction;
  }

  complete() {
    this.status = TransactionStatus.COMPLETED;
    this.updatedAt = new Date();
  }

  cancel(props: CancelProps) {
    this.status = TransactionStatus.CANCELED;
    this.cancellationReason = props.cancellationReason;
    this.updatedAt = new Date();
  }

  #validate() {
    if (!this.amount) {
      throw new Error('amount should not be empty');
    }
    if (this.amount <= 0) {
      throw new Error('amount should be greater than zero');
    }

    if (!this.status) {
      throw new Error('status should not be empty');
    }
    if (!Object.values(TransactionStatus).includes(this.status)) {
      throw new Error(`status should be one of the following values: ${Object.keys(TransactionStatus).join(', ')}`);
    }

    if (!this.description) {
      throw new Error('description should not be empty');
    }

    if (!this.toPixKeyId) {
      throw new Error('toPixKeyId should not be empty');
    }

    if (!this.fromAccountId) {
      throw new Error('fromAccountId should not be empty');
    }
  }
}

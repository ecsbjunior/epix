import { Base } from './base.model';
import { PixKey } from './pix-key.mode';

type AccountProps = Omit<Account, ''>;
type CreateAccountProps = Pick<Account, 'owner' | 'number' | 'bankId'>;

export class Account extends Base {
  owner: string;
  number: string;
  bankId: string;
  pixKeys?: PixKey[];

  private constructor(props: AccountProps) {
    super(props);

    this.owner = props.owner;
    this.number = props.number;
    this.bankId = props.bankId;
    this.pixKeys = props.pixKeys ?? [];
  }

  static create(props: CreateAccountProps) {
    const account = new Account({
      id: crypto.randomUUID(),
      owner: props.owner,
      number: props.number,
      bankId: props.bankId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    account.#validate();

    return account;
  }

  #validate() {
    if (!this.owner) throw new Error('owner should not be empty');

    if (!this.number) throw new Error('number should not be empty');

    if (!this.bankId) throw new Error('bankId should not be empty');
  }
}

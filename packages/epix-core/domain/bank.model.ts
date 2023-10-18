import { Base } from './base.model';

type BankProps = Omit<Bank, ''>;
type CreateBankProps = Pick<Bank, 'code' | 'name'>;

export class Bank extends Base {
  code: string;
  name: string;

  private constructor(props: BankProps) {
    super(props);

    this.code = props.code;
    this.name = props.name;
  }

  static create(props: CreateBankProps) {
    const bank = new Bank({
      id: crypto.randomUUID(),
      code: props.code,
      name: props.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    bank.#validate();

    return bank;
  }

  #validate() {
    if (!this.code) throw new Error('code should not be empty');

    if (!this.name) throw new Error('name should not be empty');
  }
}

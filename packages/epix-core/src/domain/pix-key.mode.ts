import { Base } from './base.model';

type PixKeyProps = Omit<PixKey, ''>;
type CreatePixKeyProps = Pick<PixKey, 'key' | 'kind' | 'accountId'>;
type LoadPixKeyProps = Omit<PixKey, ''>;

export enum PixKeyKind {
  CPF = 'CPF',
  EMAIL = 'EMAIL',
  RANDOM = 'RANDOM',
  PHONE_NUMBER = 'PHONE_NUMBER',
}

export enum PixKeyStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class PixKey extends Base {
  key: string;
  kind: PixKeyKind;
  status: PixKeyStatus;
  accountId: string;

  private constructor(props: PixKeyProps) {
    super(props);

    this.key = props.key;
    this.kind = props.kind;
    this.status = props.status;
    this.accountId = props.accountId;
  }

  static create(props: CreatePixKeyProps) {
    const pixKey = new PixKey({
      id: crypto.randomUUID(),
      key: props.key,
      kind: props.kind,
      status: PixKeyStatus.ACTIVE,
      accountId: props.accountId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    pixKey.#validate();

    return pixKey;
  }

  static load(props: LoadPixKeyProps) {
    const pixKey = new PixKey({
      id: props.id,
      key: props.key,
      kind: props.kind,
      status: props.status,
      accountId: props.accountId,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });

    pixKey.#validate();

    return pixKey;
  }

  #validate() {
    if (!this.key) {
      throw new Error('key should not be empty');
    }

    if (!this.kind) {
      throw new Error('kind should not be empty');
    }
    if (!Object.values(PixKeyKind).includes(this.kind)) {
      throw new Error(`kind should be one of the following values: ${Object.keys(PixKeyKind).join(', ')}`);
    }

    if (!this.status) {
      throw new Error('status should not be empty');
    }

    if (!this.accountId) {
      throw new Error('accountId should not be empty');
    }
  }
}

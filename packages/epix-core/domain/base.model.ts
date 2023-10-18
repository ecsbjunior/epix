type BaseProps = Omit<Base, ''>;

export class Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  protected constructor(props: BaseProps) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  #validate() {
    if (!this.id) throw new Error('id should not be empty');

    if (!this.createdAt) throw new Error('createdAt should not be empty');

    if (!this.updatedAt) throw new Error('updatedAt should not be empty');
  }
}

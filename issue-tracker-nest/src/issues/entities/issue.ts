import {
  Collection,
  Entity,
  Enum,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Label } from '../../labels/entities/label';
import { User } from '../../users/entities/user';
import { Message } from './message';

@Entity()
export class Issue {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  description!: string;

  @Property()
  place!: string;

  @Enum()
  status!: IssueStatus;

  @Property({ onCreate: () => new Date() })
  createdAt!: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedAt!: Date;

  @OneToMany(() => Message, 'issue')
  messages = new Collection<Message>(this);

  @ManyToMany(() => Label)
  labels = new Collection<Label>(this);

  @ManyToOne(() => User)
  user!: User;
}

export enum IssueStatus {
  New = 'NEW',
  Doing = 'DOING',
  Done = 'DONE',
}

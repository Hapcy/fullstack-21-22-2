import {
  Collection,
  Entity,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Issue } from '../../issues/entities/issue';
import { Message } from '../../issues/entities/message';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property({ unique: true })
  userName!: string;

  @Property()
  password!: string;

  @Enum()
  role: UserRole;

  @OneToMany(() => Issue, (issue) => issue.user)
  issues = new Collection<Issue>(this);

  @OneToMany(() => Message, (message) => message.user)
  messages = new Collection<Message>(this);
}

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
}

import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Issue } from './issue';

@Entity()
export class Message {
  @PrimaryKey()
  id!: number;

  @Property()
  text!: string;

  @Property({ onCreate: () => new Date() })
  createdAt!: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  modifiedAt!: Date;

  @ManyToOne(() => Issue)
  issue!: Issue;
}

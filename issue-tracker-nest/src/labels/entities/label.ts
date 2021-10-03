import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Issue } from '../../issues/entities/issue';

@Entity()
export class Label {
  @PrimaryKey()
  id!: number;

  @Property({ unique: true })
  text!: string;

  @ManyToMany(() => Issue, 'labels')
  issues = new Collection<Issue>(this);
}

import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Issue {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;
}

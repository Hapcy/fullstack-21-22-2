import { Migration } from '@mikro-orm/migrations';

export class Migration20211010164643 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` integer not null primary key autoincrement, `name` varchar not null, `user_name` varchar not null, `password` varchar not null, `role` varchar not null);');
    this.addSql('create unique index `user_user_name_unique` on `user` (`user_name`);');

    this.addSql('alter table `issue` add column `user_id` integer null;');
    this.addSql('create index `issue_user_id_index` on `issue` (`user_id`);');

    this.addSql('alter table `message` add column `user_id` integer null;');
    this.addSql('create index `message_user_id_index` on `message` (`user_id`);');
  }

}

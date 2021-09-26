import { Migration } from '@mikro-orm/migrations';

export class Migration20210926203923 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `issue` (`id` integer not null primary key autoincrement, `title` varchar not null);');
  }

}

import { Migration } from '@mikro-orm/migrations';

export class Migration20211003175223 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `label` (`id` integer not null primary key autoincrement, `text` varchar not null);');
    this.addSql('create unique index `label_text_unique` on `label` (`text`);');

    this.addSql('alter table `issue` add column `description` varchar null;');
    this.addSql('alter table `issue` add column `place` varchar null;');
    this.addSql('alter table `issue` add column `status` varchar null;');
    this.addSql('alter table `issue` add column `created_at` datetime null;');
    this.addSql('alter table `issue` add column `modified_at` datetime null;');

    this.addSql('create table `message` (`id` integer not null primary key autoincrement, `text` varchar not null, `created_at` datetime not null, `modified_at` datetime not null);');

    this.addSql('create table `issue_labels` (`issue_id` integer not null, `label_id` integer not null, primary key (`issue_id`, `label_id`));');
    this.addSql('create index `issue_labels_issue_id_index` on `issue_labels` (`issue_id`);');
    this.addSql('create index `issue_labels_label_id_index` on `issue_labels` (`label_id`);');

    this.addSql('alter table `message` add column `issue_id` integer null;');
    this.addSql('create index `message_issue_id_index` on `message` (`issue_id`);');
  }

}

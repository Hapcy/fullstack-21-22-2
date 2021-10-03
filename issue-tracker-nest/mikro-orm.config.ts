import { IDatabaseDriver, Options } from '@mikro-orm/core';
import { Message } from './src/issues/entities/message';
import { Label } from './src/labels/entities/label';
import { Issue } from './src/issues/entities/issue';

export default {
  entities: [Issue, Label, Message],
  dbName: 'issue-tracker.sqlite3',
  type: 'sqlite',
  migrations: {
    path: 'migrations',
    pattern: /^[\w-]+\d+\.(ts|js)$/,
  },
} as Options<IDatabaseDriver>;

import { IDatabaseDriver, Options } from '@mikro-orm/core';
import { Issue } from './src/issues/entities/issue';

export default {
  entities: [Issue],
  dbName: 'issue-tracker.sqlite3',
  type: 'sqlite',
  migrations: {
    path: 'migrations',
    pattern: /^[\w-]+\d+\.(ts|js)$/,
  },
} as Options<IDatabaseDriver>;

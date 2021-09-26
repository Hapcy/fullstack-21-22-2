import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import mikroOrmConfig from 'mikro-orm.config';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig), IssuesModule],
})
export class AppModule {}

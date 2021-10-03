import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import mikroOrmConfig from 'mikro-orm.config';
import { IssuesModule } from './issues/issues.module';
import { LabelsModule } from './labels/labels.module';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig), IssuesModule, LabelsModule],
})
export class AppModule {}

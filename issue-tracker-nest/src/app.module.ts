import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import mikroOrmConfig from 'mikro-orm.config';
import { IssuesModule } from './issues/issues.module';
import { LabelsModule } from './labels/labels.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(mikroOrmConfig),
    IssuesModule,
    LabelsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}

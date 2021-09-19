import { Module } from '@nestjs/common';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [IssuesModule],
})
export class AppModule {}

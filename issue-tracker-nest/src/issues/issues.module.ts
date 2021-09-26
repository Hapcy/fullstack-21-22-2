import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Issue } from './entities/issue';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Issue] })],
  providers: [IssuesService],
  controllers: [IssuesController],
})
export class IssuesModule {}

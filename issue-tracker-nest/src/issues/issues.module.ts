import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesController } from './issues.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Issue } from './entities/issue';
import { Label } from '../labels/entities/label';
import { User } from '../users/entities/user';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Issue, Label, User] })],
  providers: [IssuesService],
  controllers: [IssuesController],
})
export class IssuesModule {}

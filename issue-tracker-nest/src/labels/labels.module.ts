import { Module } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { LabelsController } from './labels.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Label } from './entities/label';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Label] })],
  controllers: [LabelsController],
  providers: [LabelsService],
})
export class LabelsModule {}

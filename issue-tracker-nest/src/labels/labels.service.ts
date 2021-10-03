import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { LabelDto } from './dto/label.dto';
import { Label } from './entities/label';

@Injectable()
export class LabelsService {
  constructor(
    @InjectRepository(Label)
    private labelRepository: EntityRepository<Label>,
  ) {}

  async create(createLabelDto: LabelDto) {
    const label = this.labelRepository.create(createLabelDto);
    await this.labelRepository.persistAndFlush(label);
    return label;
  }

  async findAll(labelDto: LabelDto) {
    return await this.labelRepository.find({
      text: { $like: `%${labelDto.text || ''}%` },
    });
  }
}

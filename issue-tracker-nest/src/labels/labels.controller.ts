import { UniqueConstraintViolationException } from '@mikro-orm/core';
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LabelDto } from './dto/label.dto';
import { LabelsService } from './labels.service';

@Controller('labels')
export class LabelsController {
  constructor(private readonly labelsService: LabelsService) {}

  @Post()
  async create(@Body() createLabelDto: LabelDto) {
    try {
      const newLabel = await this.labelsService.create(createLabelDto);
      return new LabelDto(newLabel);
    } catch (e) {
      if (e instanceof UniqueConstraintViolationException) {
        throw new HttpException('Label exists', HttpStatus.CONFLICT);
      } else {
        throw e;
      }
    }
  }

  @Get()
  async findAll(@Query() labelDto: LabelDto) {
    const labels = await this.labelsService.findAll(labelDto);
    return labels.map((label) => new LabelDto(label));
  }
}

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Roles } from '../auth/roles';
import { UserRole } from '../users/entities/user';
import { IssueDto } from './dto/issue.dto';
import { MessageDto } from './dto/message.dto';
import { IssuesService } from './issues.service';

@Controller('issues')
export class IssuesController {
  constructor(private _issuesService: IssuesService) {}

  @Get()
  async findAll(@Query() issueDto: IssueDto): Promise<IssueDto[]> {
    const issues = await this._issuesService.findAll(issueDto);
    return issues.map((issue) => new IssueDto(issue));
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IssueDto> {
    const issue = await this._issuesService.findOne(id);

    if (!issue) {
      throw new HttpException('Issue not found', HttpStatus.NOT_FOUND);
    }

    return new IssueDto(issue);
  }

  @Post()
  async create(@Body() issueDto: IssueDto): Promise<IssueDto> {
    const newIssue = await this._issuesService.create(issueDto);
    return new IssueDto(newIssue);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() issueDto: IssueDto,
  ): Promise<IssueDto> {
    const newIssue = await this._issuesService.update(id, issueDto);
    return new IssueDto(newIssue);
  }

  @Post(':id/messages')
  async addMessage(
    @Param('id', ParseIntPipe) id: number,
    @Body() messageDto: MessageDto,
  ): Promise<IssueDto> {
    const message = await this._issuesService.addMessage(id, messageDto);
    if (!message) {
      throw new HttpException('Issue not found', HttpStatus.NOT_FOUND);
    }

    return new MessageDto(message);
  }
}

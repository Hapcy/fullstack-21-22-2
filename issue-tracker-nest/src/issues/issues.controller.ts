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
import { UserParam } from '../auth/user-param.decorator';
import { UserDto } from '../users/dto/user.dto';
import { UserRole } from '../users/entities/user';
import { IssueDto } from './dto/issue.dto';
import { MessageDto } from './dto/message.dto';
import { IssuesService } from './issues.service';

@Controller('issues')
export class IssuesController {
  constructor(private _issuesService: IssuesService) {}

  @Get()
  async findAll(
    @Query() issueDto: IssueDto,
    @UserParam() user: UserDto,
  ): Promise<IssueDto[]> {
    const issues = await this._issuesService.findAll(user, issueDto);
    return issues.map((issue) => new IssueDto(issue));
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @UserParam() userDto: UserDto,
  ): Promise<IssueDto> {
    const issue = await this._issuesService.findOne(id, userDto);

    if (!issue) {
      throw new HttpException('Issue not found', HttpStatus.NOT_FOUND);
    }

    return new IssueDto(issue);
  }

  @Post()
  async create(
    @Body() issueDto: IssueDto,
    @UserParam() userDto: UserDto,
  ): Promise<IssueDto> {
    const newIssue = await this._issuesService.create(issueDto, userDto);
    return new IssueDto(newIssue);
  }

  @Patch(':id')
  @Roles(UserRole.Admin)
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
    @UserParam() userDto: UserDto,
  ): Promise<IssueDto> {
    const message = await this._issuesService.addMessage(
      id,
      messageDto,
      userDto,
    );
    if (!message) {
      throw new HttpException('Issue not found', HttpStatus.NOT_FOUND);
    }

    return new MessageDto(message);
  }
}

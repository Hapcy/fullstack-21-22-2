import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { IssueDto } from './dto/issue.dto';
import { Issue } from './entities/issue';
import { IssuesService } from './issues.service';

@Controller('issues')
export class IssuesController {
  constructor(private _issuesService: IssuesService) {}

  @Get()
  async findAll(@Query() issueDto: IssueDto): Promise<IssueDto[]> {
    return await this._issuesService.findAll(issueDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IssueDto> {
    const issue = await this._issuesService.findOne(id);

    if (!issue) {
      throw new HttpException('Issue not found', HttpStatus.NOT_FOUND);
    }

    return this.createIssueDto(issue);
  }

  @Post()
  async create(@Body() issueDto: IssueDto): Promise<IssueDto> {
    const newIssue = await this._issuesService.create(issueDto);
    return this.createIssueDto(newIssue);
  }

  private createIssueDto(issue: Issue): IssueDto {
    const issueDto = new IssueDto();
    issueDto.title = issue.title;
    issueDto.id = issue.id;

    return issueDto;
  }
}

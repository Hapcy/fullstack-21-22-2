import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { IssueDto } from './dto/issue.dto';
import { Issue } from './entities/issue';

@Injectable()
export class IssuesService {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: EntityRepository<Issue>,
  ) {}

  async findAll(issueDto?: IssueDto): Promise<Issue[]> {
    return await this.issueRepository.find(issueDto);
  }

  async findOne(id: number): Promise<Issue> {
    return await this.issueRepository.findOne({ id });
  }

  async create(issueDto: IssueDto): Promise<Issue> {
    const issue = new Issue();
    issue.title = issueDto.title;

    await this.issueRepository.persistAndFlush(issue);

    return issue;
  }
}

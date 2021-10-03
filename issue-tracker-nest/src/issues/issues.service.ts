import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Label } from '../labels/entities/label';
import { IssueDto } from './dto/issue.dto';
import { MessageDto } from './dto/message.dto';
import { Issue, IssueStatus } from './entities/issue';
import { Message } from './entities/message';

@Injectable()
export class IssuesService {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: EntityRepository<Issue>,
    @InjectRepository(Label)
    private labelRepository: EntityRepository<Label>,
  ) {}

  async findAll(issueDto?: IssueDto): Promise<Issue[]> {
    return await this.issueRepository.find(
      {
        title: { $like: `%${issueDto.title || ''}%` },
      },
      { populate: ['labels'] },
    );
  }

  async findOne(id: number): Promise<Issue> {
    return await this.issueRepository.findOne(
      { id },
      { populate: ['labels', 'messages'] },
    );
  }

  async create(issueDto: IssueDto): Promise<Issue> {
    const issue = new Issue();
    issue.title = issueDto.title;
    issue.description = issueDto.description;
    issue.place = issueDto.place;
    issue.status = issueDto.status || IssueStatus.New;
    issue.labels.set(
      issueDto.labels?.map((label) =>
        this.labelRepository.getReference(label.id),
      ) || [],
    );

    await this.issueRepository.persistAndFlush(issue);
    await issue.labels.init();

    return issue;
  }

  async update(id: number, issueDto: IssueDto) {
    const issue = await this.issueRepository.findOne({ id });
    issue.title = issueDto.title || issue.title;
    issue.description = issueDto.description || issue.description;
    issue.place = issueDto.place || issue.place;
    issue.status = issueDto.status || issue.status;
    if (issueDto.labels) {
      issue.labels.set(
        issueDto.labels.map((label) =>
          this.labelRepository.getReference(label.id),
        ),
      );
    }

    await this.issueRepository.persistAndFlush(issue);
    await issue.labels.init();

    return issue;
  }

  async addMessage(id: number, messageDto: MessageDto) {
    const issue = await this.findOne(id);
    if (!issue) {
      return;
    }

    const message = new Message();
    message.text = messageDto.text;
    message.issue = issue;

    issue.messages.add(message);

    await this.issueRepository.flush();

    return message;
  }
}

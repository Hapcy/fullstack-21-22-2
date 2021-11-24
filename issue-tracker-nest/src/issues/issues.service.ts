import { EntityRepository, FilterQuery } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Label } from '../labels/entities/label';
import { UserDto } from '../users/dto/user.dto';
import { User, UserRole } from '../users/entities/user';
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
    @InjectRepository(User)
    private userRepository: EntityRepository<User>,
  ) {}

  async findAll(user: UserDto, issueDto?: IssueDto): Promise<Issue[]> {
    const filters: FilterQuery<Issue> = {
      title: { $like: `%${issueDto.title || ''}%` },
    };
    if (user.role === UserRole.User) {
      filters.user = { id: user.id };
    }
    return await this.issueRepository.find(filters, {
      populate: ['labels', 'user'],
    });
  }

  async findOne(id: number, user: UserDto): Promise<Issue> {
    const filters: FilterQuery<Issue> = { id };
    if (user.role === UserRole.User) {
      filters.user = { id: user.id };
    }
    return await this.issueRepository.findOne(filters, {
      populate: ['labels', 'messages', 'user'],
    });
  }

  async create(issueDto: IssueDto, userDto: UserDto): Promise<Issue> {
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
    issue.user = this.userRepository.getReference(userDto.id);

    await this.issueRepository.persistAndFlush(issue);
    await this.issueRepository.populate(issue, ['labels', 'user']);

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
    await this.issueRepository.populate(issue, ['labels', 'user']);

    return issue;
  }

  async addMessage(id: number, messageDto: MessageDto, userDto: UserDto) {
    const issue = await this.findOne(id, userDto);
    if (!issue) {
      return;
    }

    const message = new Message();
    message.text = messageDto.text;

    message.user = this.userRepository.getReference(userDto.id);

    issue.messages.add(message);

    await this.issueRepository.flush();

    return message;
  }
}

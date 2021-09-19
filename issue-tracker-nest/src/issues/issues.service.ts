import { Injectable } from '@nestjs/common';
import { IssueDto } from './dto/issue.dto';
import { Issue } from './entities/issue';

@Injectable()
export class IssuesService {
  private _issues: Issue[] = [];
  private _nextId = 1;

  findAll(issueDto?: IssueDto): Issue[] {
    return this._issues.filter((issue) =>
      issue.title.includes(issueDto.title || ''),
    );
  }

  findOne(id: number): Issue {
    return this._issues.find((issue) => issue.id === id);
  }

  create(issueDto: IssueDto): Issue {
    const issue = new Issue();
    issue.id = this._nextId;
    this._nextId += 1;
    issue.title = issueDto.title;

    this._issues.push(issue);

    return issue;
  }
}

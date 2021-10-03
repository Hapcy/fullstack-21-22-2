import { LabelDto } from '../../labels/dto/label.dto';
import { Issue, IssueStatus } from '../entities/issue';
import { MessageDto } from './message.dto';

export class IssueDto {
  id?: number;
  title?: string;
  description?: string;
  place?: string;
  status?: IssueStatus;
  createdAt?: Date;
  modifiedAt?: Date;
  messages?: MessageDto[];
  labels?: LabelDto[];

  constructor(issue: Issue) {
    this.id = issue.id;
    this.title = issue.title;
    this.description = issue.description;
    this.createdAt = issue.createdAt;
    this.modifiedAt = issue.modifiedAt;
    this.place = issue.place;
    this.status = issue.status;
    if (issue.messages.isInitialized(true)) {
      this.messages = issue.messages
        .getItems()
        .map((message) => new MessageDto(message));
    }
    if (issue.labels.isInitialized(true)) {
      this.labels = issue.labels.getItems().map((label) => new LabelDto(label));
    }
  }
}

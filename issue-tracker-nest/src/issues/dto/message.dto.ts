import { Message } from '../entities/message';

export class MessageDto {
  id?: number;
  text?: string;
  createdAt?: Date;
  modifiedAt?: Date;

  constructor(message: Message) {
    this.id = message.id;
    this.createdAt = message.createdAt;
    this.modifiedAt = message.modifiedAt;
    this.text = message.text;
  }
}

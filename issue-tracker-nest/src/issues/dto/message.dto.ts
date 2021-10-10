import { UserDto } from '../../users/dto/user.dto';
import { User } from '../../users/entities/user';
import { Message } from '../entities/message';

export class MessageDto {
  id?: number;
  text?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  user?: UserDto;

  constructor(message: Message) {
    this.id = message.id;
    this.createdAt = message.createdAt;
    this.modifiedAt = message.modifiedAt;
    this.text = message.text;
    if (message.user && message.user instanceof User) {
      this.user = new UserDto(message.user);
    }
  }
}

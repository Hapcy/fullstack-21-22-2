import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDto } from '../users/dto/user.dto';
import { User } from '../users/entities/user';

export const UserParam = createParamDecorator(
  (_: never, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as UserDto;

    return user;
  },
);

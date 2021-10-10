import { UniqueConstraintViolationException } from '@mikro-orm/core';
import { Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserAuthDto } from './dto/user-auth.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create(userDto: UserAuthDto) {
    try {
      const user = await this.userService.create(userDto);
      return new UserDto(user);
    } catch (e) {
      if (e instanceof UniqueConstraintViolationException) {
        throw new HttpException(
          'Username is already in use.',
          HttpStatus.CONFLICT,
        );
      } else {
        throw e;
      }
    }
  }
}

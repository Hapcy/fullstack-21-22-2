import { UniqueConstraintViolationException } from '@mikro-orm/core';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AllowAnonymous } from '../auth/allow-anonymous';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { UserParam } from '../auth/user-param.decorator';
import { UserAuthDto } from './dto/user-auth.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @AllowAnonymous()
  @Post()
  async create(@Body() userAuthDto: UserAuthDto) {
    try {
      const user = await this.userService.create(userAuthDto);
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

  @AllowAnonymous()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@UserParam() user: UserDto) {
    return {
      user,
      access_token: await this.authService.generateJwt(user),
    };
  }
}

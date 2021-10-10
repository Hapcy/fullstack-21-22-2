import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { UserAuthDto } from './dto/user-auth.dto';
import { User } from './entities/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: EntityRepository<User>,
  ) {}

  async create(userAuthDto: UserAuthDto): Promise<User> {
    const user = new User();
    user.name = userAuthDto.name;
    user.userName = userAuthDto.userName;
    // TODO password
    await this.userRepository.persistAndFlush(user);

    return user;
  }
}

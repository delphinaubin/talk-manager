import { Controller,  Body, Post } from '@nestjs/common';
import { UserRepository } from '../data/user/UserRepository';
import { UserDto } from './user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() user: UserDto): Promise<any> {
    await this.userRepository.createUser();
  }
}

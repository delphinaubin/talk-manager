import { Get, Controller, Put, Body } from '@nestjs/common';
import { UserRepository } from '../data/user/user.repository';
import { UserDto } from './user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Put()
  async createUser(@Body() user: UserDto): Promise<any> {
    await this.userRepository.createUser();
  }
}

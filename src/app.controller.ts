import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRepository } from './data/user/user.repository';
import { TalkRepository } from './data/talk/talk.repository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userRepository: UserRepository,
  ) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('/test')
  async test(): Promise<any> {
    await this.userRepository.createUser();
  }
}

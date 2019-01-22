import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepository } from './data/user/UserRepository';
import { TalkController } from './controller/talk/TalkController';
import { TalkDtoMapper } from './controller/talk/TalkDtoMapper';
import { TalkRepository } from './data/talk/TalkRepository';
import { UserController } from './controller/user.controller';

@Module({
  imports: [],
  controllers: [AppController, TalkController, UserController],
  providers: [AppService, UserRepository, TalkRepository, TalkDtoMapper],
})
export class AppModule {}

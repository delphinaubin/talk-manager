import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepository } from './data/user/UserRepository';
import { TalkRepository } from './data/talk/TalkRepository';
import { TalkController } from './controller/talk/TalkController';
import { TalkDtoMapper } from './controller/talk/TalkDtoMapper';

@Module({
  imports: [],
  controllers: [AppController, TalkController],
  providers: [AppService, UserRepository, TalkRepository, TalkDtoMapper],
})
export class AppModule {}

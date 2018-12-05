import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRepository } from './data/user/UserRepository';
import { TalkRepository } from './data/talk/TalkRepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserRepository, TalkRepository],
})
export class AppModule {}

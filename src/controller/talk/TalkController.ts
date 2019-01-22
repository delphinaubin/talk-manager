import { Controller, Post, Body } from '@nestjs/common';
import { TalkRepository } from '../../data/talk/TalkRepository';
import { TalkDto } from './TalkDto';
import { TalkDtoMapper } from './TalkDtoMapper';

@Controller('talks')
export class TalkController {
  constructor(
    private readonly talkRepository: TalkRepository,
    private readonly talkDtoMapper: TalkDtoMapper,
  ){}

  @Post()
  async createTalk(@Body() talkToCreate: TalkDto) {
    const talk = this.talkDtoMapper.dtoToBusinessEntity(talkToCreate);
    const createdId = await this.talkRepository.createTalk(talk);
    return {
      createdId,
    };
  }
}
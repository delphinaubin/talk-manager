import { Controller, Post, Body } from '@nestjs/common';
import { TalkRepository } from '../../data/talk/TalkRepository';
import { TalkDto } from './TalkDto';
import { TalkDtoMapper } from './TalkDtoMapper';
import { ApiImplicitBody } from '@nestjs/swagger';

@Controller('talks')
export class TalkController {
  constructor(
    private readonly talkRepository: TalkRepository,
    private readonly talkDtoMapper: TalkDtoMapper,
  ){}
  @ApiImplicitBody({ name: 'talk', description: 'a talk', required: true, type: TalkDto })
  @Post()
  async createTalk(@Body() talkToCreate: TalkDto) {
    const talk = this.talkDtoMapper.dtoToBusinessEntity(talkToCreate);
    const createdId = await this.talkRepository.createTalk(talk);
    return {
      createdId,
    };
  }
}
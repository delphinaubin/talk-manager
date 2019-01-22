import { Injectable } from '@nestjs/common';
import { TalkDto } from './TalkDto';
import { Talk } from '../../domain/talk/Talk';
import { TalkBuilder } from '../../domain/talk/TalkBuilder';
import { Name } from '../../domain/Name';

@Injectable()
export class TalkDtoMapper {
  dtoToBusinessEntity(talkDto: TalkDto): Talk {
    return TalkBuilder
      .aTalk()
      .withName(new Name(talkDto.name))
      .build();
  }
}
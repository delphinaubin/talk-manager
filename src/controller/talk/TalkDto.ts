import { ApiModelProperty } from '@nestjs/swagger';

export class TalkDto {
  @ApiModelProperty()
  name: string;
}
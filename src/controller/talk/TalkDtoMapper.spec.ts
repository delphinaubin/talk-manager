import { TalkDtoMapper } from './TalkDtoMapper';
import { Talk } from '../../domain/talk/Talk';

describe('TalkDtoMapper', () => {
  describe('dtoToBusinessEntity', () => {
    it('should create a business entity with the dto information', () => {

      const talkDtoMapper = new TalkDtoMapper();
      const A_NAME = 'A NAME';
      const A_TALK_DTO = {
        name: A_NAME,
      };
      const result = talkDtoMapper.dtoToBusinessEntity(A_TALK_DTO);
      expect(result).toBeInstanceOf(Talk);
      expect(result.name.get()).toBe(A_NAME);
    });
  });
});
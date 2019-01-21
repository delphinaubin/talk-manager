import {TalkBuilder} from './TalkBuilder';
import { Talk } from './Talk';
import { Name } from '../Name';
import { User } from '../User';

describe('TalkBuilder', () => {
  it('should be able to build a talk from scratch', () => {
    const A_NAME = new Name('A NAME');
    const AN_AUTHOR = new User();
    const result = TalkBuilder
      .aTalk()
      .withName(A_NAME)
      .withAuthor(AN_AUTHOR)
      .build();
    expect(result).toBeInstanceOf(Talk);
    expect(result.name).toBe(A_NAME);
    expect(result.author).toBe(AN_AUTHOR);

  });
});
import { UserBuilder } from './user.builder';
import { Name } from '../name';
import { User } from '../user';
import { Job } from '../job';
import { FirstName } from '../first-name';

describe('UserBuilder', () => {
  it('should build a user from scratch', () => {
    const aName = new Name('dudu');
    const aFirstName = new FirstName('doudou');
    const aJob = new Job('taxi');
    const result = UserBuilder.aUser()
      .withName(aName)
      .withFirstName(aFirstName)
      .withJob(aJob)
      .build();
    expect(result).toBeInstanceOf(User);
    expect(result.name).toBe(aName);
    expect(result.firstName).toBe(aFirstName);
    expect(result.job).toBe(aJob);
  });
});

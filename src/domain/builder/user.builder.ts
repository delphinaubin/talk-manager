import { Name } from '../name';
import { User } from '../user';
import { FirstName } from '../first-name';
import { Job } from '../Job';

export class UserBuilder {
  public static aUser(): UserBuilder {
    return new UserBuilder();
  }
  private user: User;
  constructor() {
    this.user = new User();
  }

  public withName(name: Name): this {
    this.user.name = name;
    return this;
  }
  public withFirstName(firstName: FirstName): this {
    this.user.firstName = firstName;
    return this;
  }

  public withJob(job: Job): this {
    this.user.job = job;
    return this;
  }

  public build(): User {
    return this.user;
  }
}

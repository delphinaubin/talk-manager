import { Talk } from './Talk';
import { Name } from '../Name';
import User from '../builder/user/User';

export class TalkBuilder {
  private entityToBuild: Talk;

  private constructor() {
    this.entityToBuild = new Talk();
  }

  static aTalk() {
    return new TalkBuilder();
  }

  withName(name: Name) {
    this.entityToBuild.name = name;
    return this;
  }

  withAuthor(author: User) {
    this.entityToBuild.author = author;
    return this;
  }

  build() {
    return this.entityToBuild;
  }
}
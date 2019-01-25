import { Job } from 'src/domain/Job';
import { Name } from 'src/domain/Name';
import { FirstName } from 'src/domain/FirstName';

export default class User {
  public name: Name;
  public firstName: FirstName;
  public job: Job;
}

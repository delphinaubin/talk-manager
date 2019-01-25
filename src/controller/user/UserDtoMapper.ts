
import UserBuilder from '../../domain/builder/user/UserBuilder';
import User from 'src/domain/builder/user/User';
import { Name } from '../../domain/Name';
import { FirstName } from '../../domain/FirstName';
import { Job } from '../../domain/Job';
import { UserDto } from './UserDto';
export default class UserDtoMapper {
  dtoToBusinessEntity(userDto: UserDto): User {
    return UserBuilder
    .aUser()
    .withName(new Name(userDto.name))
    .withFirstName(new FirstName(userDto.firstName))
    .withJob(new Job(userDto.job))
    .build();
  }
}
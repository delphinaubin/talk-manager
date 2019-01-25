import UserDtoMapper from './UserDtoMapper';
describe('UserDtoMapper', () => {
  describe('dtoToBusinessEntity', () => {
    it('should create a business entity with the dto information', () => {
     const userDtoMapper = new UserDtoMapper();
     const A_NAME = 'A NAME';
     const A_FIRSTNAME = 'A FIRSTNAME';
     const A_JOB = 'A JOB';
     const A_USER_DTO = {
       name: A_NAME,
       firstName: A_FIRSTNAME,
       job:  A_JOB,
     };
     const result = userDtoMapper.dtoToBusinessEntity(A_USER_DTO);
     expect(result.name.get()).toBe(A_NAME);
     expect(result.firstName.get()).toBe(A_FIRSTNAME);
     expect(result.job.get()).toBe(A_JOB);
    });
  });
});
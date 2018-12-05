import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '../AbstractRepository';

@Injectable()
export class TalkRepository extends AbstractRepository {
  public async createTalk() {
    const ref = this.getDatabaseConnection().collection('talks');
    return await ref.add({
      name: 'The talk of the year',
    });
  }
}

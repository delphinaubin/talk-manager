import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '../AbstractRepository';
import { Talk } from '../../domain/talk/Talk';

@Injectable()
export class TalkRepository extends AbstractRepository {
  public async createTalk(talk: Talk) {
    const ref = await this.getDatabaseConnection().collection('talks');
    const result = await ref.add({
      name: talk.name.get(),
    });
    return result.id;
  }
}

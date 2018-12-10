import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '../abstract-repository';

@Injectable()
export class UserRepository extends AbstractRepository {
  public async createUser() {
    const ref = this.getDatabaseConnection().collection('users');
    return await ref.add({
      name: 'Norris',
      firstname: 'Chuck',
      job: 'god',
    });
  }
}

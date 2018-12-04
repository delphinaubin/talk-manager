import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';

// tslint:disable-next-line:no-var-requires
const serviceAccount = require('../../config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
const ref = db.collection('users');

@Injectable()
export class UserRepository {
  public async createUser(){
    return await ref.add({
      name: 'Norris',
      firstname: 'Chuck',
      job: 'god',
    });
  }
}
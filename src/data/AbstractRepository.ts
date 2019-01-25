import * as admin from 'firebase-admin';
// tslint:disable-next-line:no-var-requires
const serviceAccount = require('../../config/serviceAccountKey.json');
export abstract class AbstractRepository {
  private static databaseConnection: admin.firestore.Firestore;
  protected getDatabaseConnection(): admin.firestore.Firestore {
    if (!AbstractRepository.databaseConnection) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      AbstractRepository.databaseConnection = admin.firestore();
    }
    return AbstractRepository.databaseConnection;
  }
}
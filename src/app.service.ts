import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}

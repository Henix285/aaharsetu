import { Controller, Get } from '@nestjs/common';
import { firestore } from '../common/firebase/firebase';

@Controller('users')
export class UsersController {
  @Get()
  async getUsers() {
    const snapshot = await firestore.collection('users').get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
}

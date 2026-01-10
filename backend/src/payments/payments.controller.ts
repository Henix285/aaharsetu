import { Controller, Get } from '@nestjs/common';
import { firestore } from '../common/firebase/firebase';

@Controller('payments')
export class PaymentsController {
  @Get()
  async getPayments() {
    const snapshot = await firestore.collection('payments').get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
}

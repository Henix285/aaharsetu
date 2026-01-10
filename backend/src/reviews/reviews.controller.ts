import { Controller, Get } from '@nestjs/common';
import { firestore } from '../common/firebase/firebase';

@Controller('reviews')
export class ReviewsController {
  @Get()
  async getReviews() {
    const snapshot = await firestore.collection('reviews').get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
}

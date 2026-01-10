import { Injectable } from '@nestjs/common';
import { FirestoreService } from '../../common/firebase/firestore.service';

@Injectable()
export class BookingFirestoreRepository {
  constructor(
    private readonly firestore: FirestoreService,
  ) {}

  async createBooking(data: any) {
    const ref = await this.firestore
      .getCollection('bookings')
      .add(data);

    return { id: ref.id, ...data };
  }

  async updateBooking(bookingId: string, data: any) {
    await this.firestore
      .getCollection('bookings')
      .doc(bookingId)
      .update(data);

    return { id: bookingId, ...data };
  }

  async findAll() {
    const snapshot = await this.firestore
      .getCollection('bookings')
      .orderBy('createdAt', 'desc')
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async findByCustomer(customerId: string) {
    const snapshot = await this.firestore
      .getCollection('bookings')
      .where('customerId', '==', customerId)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async cancelBooking(bookingId: string) {
    await this.firestore
      .getCollection('bookings')
      .doc(bookingId)
      .update({
        status: 'CANCELLED',
        updatedAt: new Date(),
      });

    return { id: bookingId, status: 'CANCELLED' };
  }
}

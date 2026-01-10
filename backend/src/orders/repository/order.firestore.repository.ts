import { Injectable } from '@nestjs/common';
import { FirestoreService } from '../../common/firebase/firestore.service';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderFirestoreRepository implements OrderRepository {
  constructor(
    private readonly firestore: FirestoreService,
  ) {}

  // CREATE order
  async createOrder(data: any): Promise<any> {
    const ref = await this.firestore
      .getCollection('orders')
      .add({
        ...data,
        status: 'PLACED',
        createdAt: new Date(),
      });

    return {
      id: ref.id,
      ...data,
      status: 'PLACED',
    };
  }

  // GET orders by customer
  async findByCustomer(customerId: string): Promise<any[]> {
    const snapshot = await this.firestore
      .getCollection('orders')
      .where('customerId', '==', customerId)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  // GET orders by provider (cloud kitchen)
  async findByProvider(providerId: string): Promise<any[]> {
    const snapshot = await this.firestore
      .getCollection('orders')
      .where('providerId', '==', providerId)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  // UPDATE order status
  async updateStatus(
    orderId: string,
    status: 'PLACED' | 'PREPARING' | 'DELIVERED' | 'CANCELLED',
  ): Promise<any> {
    await this.firestore
      .getCollection('orders')
      .doc(orderId)
      .update({
        status,
        updatedAt: new Date(),
      });

    return {
      id: orderId,
      status,
    };
  }
}

import { Injectable } from '@nestjs/common';
import { FirestoreService } from '../../common/firebase/firestore.service';
import { ProviderRepository } from './provider.repository';

@Injectable()
export class ProviderFirestoreRepository implements ProviderRepository {
  constructor(
    private readonly firestore: FirestoreService,
  ) {}

  // CREATE provider
  async createProvider(data: any): Promise<any> {
    const ref = await this.firestore
      .getCollection('providers')
      .add({
        ...data,
        createdAt: new Date(),
      });

    return {
      id: ref.id,
      ...data,
    };
  }

  // GET all providers
  async findAll(): Promise<any[]> {
    const snapshot = await this.firestore
      .getCollection('providers')
      .orderBy('createdAt', 'desc')
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  // GET providers by type
  async findByType(
    type: 'COOK' | 'CATERER' | 'CLOUD_KITCHEN',
  ): Promise<any[]> {
    const snapshot = await this.firestore
      .getCollection('providers')
      .where('type', '==', type)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
}

import { Injectable } from '@nestjs/common';
import { FirestoreService } from '../../common/firebase/firestore.service';
import { MenuRepository } from './menu.repository';

@Injectable()
export class MenuFirestoreRepository implements MenuRepository {
  constructor(
    private readonly firestore: FirestoreService,
  ) {}

  // CREATE menu item
  async createMenuItem(data: any): Promise<any> {
    const ref = await this.firestore
      .getCollection('menus')
      .add({
        ...data,
        createdAt: new Date(),
      });

    return {
      id: ref.id,
      ...data,
    };
  }

  // GET menus by provider
  async findByProvider(providerId: string): Promise<any[]> {
    const snapshot = await this.firestore
      .getCollection('menus')
      .where('providerId', '==', providerId)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  // DELETE menu item (optional, basic)
  async deleteMenuItem(menuId: string): Promise<void> {
    await this.firestore
      .getCollection('menus')
      .doc(menuId)
      .delete();
  }
}

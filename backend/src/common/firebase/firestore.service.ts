import { Injectable } from '@nestjs/common';
import { firestore } from './firebase';

@Injectable()
export class FirestoreService {
  getCollection<T = FirebaseFirestore.DocumentData>(name: string) {
    return firestore.collection(name) as FirebaseFirestore.CollectionReference<T>;
  }
}

import { Module } from '@nestjs/common';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { MenuFirestoreRepository } from './repository/menu.firestore.repository';
import { FirebaseModule } from '../common/firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  controllers: [MenusController],
  providers: [
    MenusService,
    {
      provide: 'MenuRepository',
      useClass: MenuFirestoreRepository,
    },
  ],
})
export class MenusModule {}

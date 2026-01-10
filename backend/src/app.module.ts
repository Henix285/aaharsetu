import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FirebaseModule } from './common/firebase/firebase.module';

import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';
import { MenusModule } from './menus/menus.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { ProvidersModule } from './providers/providers.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({

  
  imports: [
    FirebaseModule, // 🔴 REQUIRED ONCE
    BookingsModule,
    UsersModule,
    MenusModule,
    OrdersModule,
    PaymentsModule,
    ProvidersModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

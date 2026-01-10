import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { BookingsReadController } from './bookings.read.controller';
import { BookingsService } from './bookings.service';
import { BookingFirestoreRepository } from './repository/booking.firestore.repository';
import { FirebaseModule } from '../common/firebase/firebase.module';

@Module({
  imports: [FirebaseModule], // ✅ THIS WAS MISSING
  controllers: [BookingsController, BookingsReadController],
  providers: [
    BookingsService,
    {
      provide: 'BookingRepository',
      useClass: BookingFirestoreRepository,
    },
  ],
})
export class BookingsModule {}

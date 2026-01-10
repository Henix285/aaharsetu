import { Injectable, Inject } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import type { BookingRepository } from './repository/booking.repository';

@Injectable()
export class BookingsService {
  constructor(
    @Inject('BookingRepository')
    private readonly bookingRepo: BookingRepository,
  ) {}

  // CREATE booking
  async create(dto: CreateBookingDto, customerId: string) {
    return this.bookingRepo.createBooking({
      customerId,
      providerId: dto.providerId,
      serviceType: dto.serviceType,
      date: dto.date,
      timeSlot: dto.timeSlot,
      status: 'PENDING',
      createdAt: new Date(),
    });
  }

  // ACCEPT booking
  async accept(bookingId: string) {
    return this.bookingRepo.updateBooking(bookingId, {
      status: 'ACCEPTED',
      updatedAt: new Date(),
    });
  }

  // GET all bookings
  async findAll() {
    return this.bookingRepo.findAll();
  }

  // GET bookings by customer
  async findByCustomer(customerId: string) {
    return this.bookingRepo.findByCustomer(customerId);
  }

  // CANCEL booking
  async cancel(bookingId: string) {
    return this.bookingRepo.cancelBooking(bookingId);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsReadController {
  constructor(
    private readonly bookingsService: BookingsService,
  ) {}

  // GET /bookings
  @Get()
  getAllBookings() {
    return this.bookingsService.findAll();
  }

  // GET /bookings/customer/:id
  @Get('customer/:id')
  getBookingsByCustomer(@Param('id') customerId: string) {
    return this.bookingsService.findByCustomer(customerId);
  }
}

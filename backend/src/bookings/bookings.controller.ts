import { Controller, Post, Patch, Param, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(
    private readonly bookingsService: BookingsService,
  ) {}

  // POST /bookings
  @Post()
  createBooking(@Body() dto: CreateBookingDto) {
    // TEMP: customerId hardcoded until auth is added
    const customerId = 'demo-customer-id';
    return this.bookingsService.create(dto, customerId);
  }

  // PATCH /bookings/:id/accept
  @Patch(':id/accept')
  acceptBooking(@Param('id') id: string) {
    return this.bookingsService.accept(id);
  }

  // PATCH /bookings/:id/cancel
  @Patch(':id/cancel')
  cancelBooking(@Param('id') id: string) {
    return this.bookingsService.cancel(id);
  }
}

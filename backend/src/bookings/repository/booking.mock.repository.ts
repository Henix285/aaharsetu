import { BookingRepository } from './booking.repository';

export class BookingMockRepository implements BookingRepository {
  private bookings: any[] = [];

  async createBooking(data: any): Promise<any> {
    const booking = {
      id: `mock-${Date.now()}`,
      ...data,
    };
    this.bookings.push(booking);
    return booking;
  }

  async updateBooking(bookingId: string, data: any): Promise<any> {
    const booking = this.bookings.find(b => b.id === bookingId);
    if (!booking) return null;

    Object.assign(booking, data);
    return booking;
  }

  async findAll(): Promise<any[]> {
    return this.bookings;
  }

  async findByCustomer(customerId: string): Promise<any[]> {
    return this.bookings.filter(
      booking => booking.customerId === customerId,
    );
  }

  async cancelBooking(bookingId: string): Promise<any> {
    const booking = this.bookings.find(b => b.id === bookingId);
    if (!booking) return null;

    booking.status = 'CANCELLED';
    booking.updatedAt = new Date();
    return booking;
  }
}

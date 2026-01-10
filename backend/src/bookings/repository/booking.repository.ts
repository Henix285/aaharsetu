export interface BookingRepository {
  // CREATE
  createBooking(data: any): Promise<any>;

  // UPDATE (accept, etc.)
  updateBooking(bookingId: string, data: any): Promise<any>;

  // READ
  findAll(): Promise<any[]>;
  findByCustomer(customerId: string): Promise<any[]>;

  // CANCEL
  cancelBooking(bookingId: string): Promise<any>;
}

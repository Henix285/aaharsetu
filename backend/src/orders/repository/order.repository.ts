export interface OrderRepository {
  // CREATE order
  createOrder(data: any): Promise<any>;

  // READ
  findByCustomer(customerId: string): Promise<any[]>;
  findByProvider(providerId: string): Promise<any[]>;

  // UPDATE
  updateStatus(orderId: string, status: 'PLACED' | 'PREPARING' | 'DELIVERED' | 'CANCELLED'): Promise<any>;
}

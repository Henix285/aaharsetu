import { Injectable, Inject } from '@nestjs/common';
import type { OrderRepository } from './repository/order.repository';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepo: OrderRepository,
  ) {}

  // CREATE order
  async create(data: any) {
    return this.orderRepo.createOrder(data);
  }

  // GET orders by customer
  async findByCustomer(customerId: string) {
    return this.orderRepo.findByCustomer(customerId);
  }

  // GET orders by provider (cloud kitchen)
  async findByProvider(providerId: string) {
    return this.orderRepo.findByProvider(providerId);
  }

  // UPDATE order status
  async updateStatus(
    orderId: string,
    status: 'PLACED' | 'PREPARING' | 'DELIVERED' | 'CANCELLED',
  ) {
    return this.orderRepo.updateStatus(orderId, status);
  }
}

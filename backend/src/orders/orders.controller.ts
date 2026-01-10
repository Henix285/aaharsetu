import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
  ) {}

  // POST /orders
  @Post()
  createOrder(@Body() body: any) {
    /*
      Expected body example:
      {
        "customerId": "customer-id",
        "providerId": "cloud-kitchen-id",
        "items": [
          { "menuId": "menu-id-1", "qty": 2 },
          { "menuId": "menu-id-2", "qty": 1 }
        ],
        "totalAmount": 520
      }
    */
    return this.ordersService.create(body);
  }

  // GET /orders/customer/:customerId
  @Get('customer/:customerId')
  getOrdersByCustomer(@Param('customerId') customerId: string) {
    return this.ordersService.findByCustomer(customerId);
  }

  // GET /orders/provider/:providerId
  @Get('provider/:providerId')
  getOrdersByProvider(@Param('providerId') providerId: string) {
    return this.ordersService.findByProvider(providerId);
  }

  // PATCH /orders/:id/status
  @Patch(':id/status')
  updateOrderStatus(
    @Param('id') id: string,
    @Body('status') status: 'PLACED' | 'PREPARING' | 'DELIVERED' | 'CANCELLED',
  ) {
    return this.ordersService.updateStatus(id, status);
  }
}

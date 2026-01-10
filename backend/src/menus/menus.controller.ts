import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
  constructor(
    private readonly menusService: MenusService,
  ) {}

  // POST /menus
  @Post()
  createMenuItem(@Body() body: any) {
    /*
      Expected body example:
      {
        "providerId": "provider-id",
        "name": "Paneer Butter Masala",
        "price": 220,
        "category": "Main Course",
        "available": true
      }
    */
    return this.menusService.create(body);
  }

  // GET /menus/provider/:providerId
  @Get('provider/:providerId')
  getMenusByProvider(@Param('providerId') providerId: string) {
    return this.menusService.findByProvider(providerId);
  }
  @Get('test')
  test() {
    return 'menus works';
  }


  // DELETE /menus/:id
  @Delete(':id')
  deleteMenuItem(@Param('id') id: string) {
    return this.menusService.delete(id);
  }
}

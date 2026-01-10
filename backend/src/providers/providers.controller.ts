import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProvidersService } from './providers.service';

@Controller('providers')
export class ProvidersController {
  constructor(
    private readonly providersService: ProvidersService,
  ) {}

  // POST /providers
  @Post()
  createProvider(@Body() body: any) {
    /*
      Expected body example:
      {
        "name": "Sri Lakshmi Caterers",
        "type": "CATERER",
        "location": "Chennai",
        "rating": 4.5,
        "verified": true
      }
    */
    return this.providersService.create(body);
  }

  // GET /providers
  @Get()
  getAllProviders() {
    return this.providersService.findAll();
  }

  // GET /providers/type/:type
  @Get('type/:type')
  getProvidersByType(@Param('type') type: 'COOK' | 'CATERER' | 'CLOUD_KITCHEN') {
    return this.providersService.findByType(type);
  }
}

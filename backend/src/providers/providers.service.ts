import { Injectable, Inject } from '@nestjs/common';
import type { ProviderRepository } from './repository/provider.repository';

@Injectable()
export class ProvidersService {
  constructor(
    @Inject('ProviderRepository')
    private readonly providerRepo: ProviderRepository,
  ) {}

  async create(data: any) {
    return this.providerRepo.createProvider(data);
  }

  async findAll() {
    return this.providerRepo.findAll();
  }

  async findByType(type: 'COOK' | 'CATERER' | 'CLOUD_KITCHEN') {
    return this.providerRepo.findByType(type);
  }
}

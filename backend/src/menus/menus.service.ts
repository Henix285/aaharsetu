import { Injectable, Inject } from '@nestjs/common';
import type { MenuRepository } from './repository/menu.repository';

@Injectable()
export class MenusService {
  constructor(
    @Inject('MenuRepository')
    private readonly menuRepo: MenuRepository,
  ) {}

  // CREATE menu item
  async create(data: any) {
    return this.menuRepo.createMenuItem(data);
  }

  // GET menus by provider
  async findByProvider(providerId: string) {
    return this.menuRepo.findByProvider(providerId);
  }

  // DELETE menu item
  async delete(menuId: string) {
    return this.menuRepo.deleteMenuItem(menuId);
  }
}

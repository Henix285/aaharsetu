export interface MenuRepository {
  // CREATE menu item
  createMenuItem(data: any): Promise<any>;

  // READ
  findByProvider(providerId: string): Promise<any[]>;

  // OPTIONAL (for later)
  deleteMenuItem(menuId: string): Promise<void>;
}

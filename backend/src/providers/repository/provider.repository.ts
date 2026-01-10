export interface ProviderRepository {
  // CREATE provider
  createProvider(data: any): Promise<any>;

  // READ
  findAll(): Promise<any[]>;
  findByType(type: 'COOK' | 'CATERER' | 'CLOUD_KITCHEN'): Promise<any[]>;
}

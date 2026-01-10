export class CreateProviderDto {
  businessName: string;
  providerType: 'COOK' | 'CATERER' | 'CLOUD_KITCHEN';
  cuisines: string[];
}


import { Module } from '@nestjs/common';
import { ProvidersController } from './providers.controller';
import { ProvidersService } from './providers.service';
import { ProviderFirestoreRepository } from './repository/provider.firestore.repository';

@Module({
  controllers: [ProvidersController],
  providers: [
    ProvidersService,
    {
      provide: 'ProviderRepository',
      useClass: ProviderFirestoreRepository,
    },
  ],
})
export class ProvidersModule {}

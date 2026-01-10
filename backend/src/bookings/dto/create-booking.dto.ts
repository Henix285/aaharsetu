import { DeliveryMode } from '@common/enums/delivery-mode.enum';

export class CreateBookingDto {
  providerId: string;
  serviceType: 'COOK' | 'CATERING' | 'CLOUD_KITCHEN';
  date: string;
  timeSlot: string;
  deliveryMode: DeliveryMode;
  notes?: string;
}

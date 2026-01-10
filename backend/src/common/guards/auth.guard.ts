import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    // Temporary user (later replaced by Firebase auth)
    request.user = {
      id: 'TEMP_CUSTOMER_ID',
      role: 'CUSTOMER',
    };

    return true;
  }
}

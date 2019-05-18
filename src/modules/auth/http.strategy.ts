import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  /**
   * logic to prevent unauthorized calls
   * @param token token to validate
   */
  async validate(token: string) {
    const isAllowed = await this.authService.validateCall(token);
    if (!isAllowed) {
      throw new UnauthorizedException();
    }
    return isAllowed;
  }
}
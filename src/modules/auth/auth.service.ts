import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    /**
     * validation function to make endpoint private
     * @param token token to validate
     */
  async validateCall(token: string): Promise<any> {
    return token === '1234';
  }
}
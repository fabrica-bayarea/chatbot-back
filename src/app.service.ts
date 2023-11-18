import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Retorna a saudação padrão.
   * @returns Uma string contendo a saudação.
   */
  getHello(): string {
    return 'Hello World!';
  }
}

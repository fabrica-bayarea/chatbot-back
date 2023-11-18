import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
/**
 * Define se o endpoint pode ser acessado sem autentição de usuário
 * @returns 
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
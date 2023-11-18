import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @Public()
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    try {
      return this.authService.login(req.user);
    } catch (error) {
      console.error(error);
      throw new Error('Erro durante o login');
    }
  }
}

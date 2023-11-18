import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUsuarioDto, SignUpUsuarioDto } from './dto/atuh.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup/usuario')
  signUpUsuario(@Body() dto: SignUpUsuarioDto) {
    return this.authService.signUpUsuario(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin/usuario')
  signInUsuario(@Body() dto: SignInUsuarioDto) {
    return this.authService.signInUsuario(dto);
  }
}

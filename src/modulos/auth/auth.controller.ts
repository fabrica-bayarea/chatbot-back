import { Controller, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){
    }
    @Post('/login')
    @Public()
    @HttpCode(HttpStatus.OK)
    async login(@Request() req) {
      console.log(req);
      return this.authService.login(req.body);
    }
}

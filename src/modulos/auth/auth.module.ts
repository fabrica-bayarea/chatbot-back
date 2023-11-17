import { Module } from '@nestjs/common';
import { UsuarioModule } from '../usuario/usuario.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';


import { JwtStrategy } from './jwt.strategy';
@Module({
  providers: [AuthService, JwtStrategy],
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '3000s' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}

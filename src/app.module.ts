import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modulos/auth/auth.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UsuarioModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

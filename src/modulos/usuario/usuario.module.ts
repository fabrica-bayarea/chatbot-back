import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioController } from './ usuario.controller';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService],
  exports: [UsuarioService, PrismaService], 
})
export class UsuarioModule {}

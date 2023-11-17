import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [UsuarioService, PrismaService],
    exports: [UsuarioService],
    
})
export class UsuarioModule {

}

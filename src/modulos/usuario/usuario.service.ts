import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async getUsuario(email:string): Promise<UsuarioDto>{
        if(!email){
            throw new BadRequestException(`O email deve ser informado`);
        }
        const usuario = await this.prisma.usuario.findUnique({
            where: {
                email: email
            }
        });
        if(!usuario){
            throw new NotFoundException(`Usuário não encontrado`);
        }
        return new UsuarioDto(usuario);
    }
}

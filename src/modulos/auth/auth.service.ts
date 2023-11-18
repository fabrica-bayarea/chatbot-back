import { BcryptUtils } from './../../common/utils/bcrypt.utils';
import { JwtService } from '@nestjs/jwt';
import { UsuarioDto } from '../usuario/dto/usuario.dto';
import { UsuarioService } from './../usuario/usuario.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ) {}

    async login(usr: UsuarioDto) {
        const usuario = await this.validarUsuario(usr.email, usr.senha);
        const payload = { id: usuario.id, nome: usuario.nome, email: usuario.email };

        if (!payload.id || !payload.nome || !payload.email) {
            throw new UnauthorizedException('Dados de usuário inválidos para criar token JWT.');
        }

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async validarUsuario(email: string, senha: string): Promise<any> {
        const usuario: UsuarioDto = await this.usuarioService.getUsuario(email);

        if (!usuario) {
            throw new UnauthorizedException('Usuário não encontrado.');
        }

        const isSenhaValida = await BcryptUtils.compararSenhas(senha, usuario.senha);

        if (isSenhaValida) {
            // Retorna apenas o usuário sem a senha
            const { senha, ...usuarioSemSenha } = usuario;
            return usuarioSemSenha;
        }

        throw new UnauthorizedException('Senha inválida');
    }
}

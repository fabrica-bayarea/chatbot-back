import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async createUsuario(@Body() usuarioDto: UsuarioDto) {
    return this.usuarioService.createUsuario(usuarioDto);
  }
}
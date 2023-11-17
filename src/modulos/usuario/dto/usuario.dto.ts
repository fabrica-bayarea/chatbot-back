import { IsEmail, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class UsuarioDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsDate()
  data_criacao: Date;
  
  constructor(init:Partial<UsuarioDto> = null){
    Object.assign(this, init);
  }
}
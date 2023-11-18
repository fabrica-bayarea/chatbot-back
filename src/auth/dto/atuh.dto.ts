import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class SignUpUsuarioDto {
  @IsNotEmpty({ message: 'nome não deve ser omitido' })
  @IsString({ message: 'nome deve ser uma string' })
  nome: string;

  @IsEmail({}, { message: 'email deve ser um email válido' })
  @IsString({ message: 'email deve ser uma string' })
  email: string;

  @IsStrongPassword(
    {},
    {
      message:
        'senha deve conter no mínimo 8 caracteres, 1 letra mínuscula, 1 maíusucula, 1 número e 1 caractere especial',
    },
  )
  senha: string;
}

export class SignInUsuarioDto {
  @IsEmail({}, { message: 'email deve ser um email válido' })
  email: string;

  @IsNotEmpty({ message: 'senha não pode ser omitida' })
  @IsString({ message: 'senha deve ser uma string' })
  senha: string;
}

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita a validação globalmente
  app.useGlobalPipes(new ValidationPipe());

  // Popula o banco de dados no ambiente de desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    const prisma = new PrismaClient();
    try {
      await prisma.usuario.create({
        data: {
          nome: process.env.NOME_USUARIO,
          email: process.env.EMAIL_USUARIO,
          senha: process.env.SENHA_USUARIO,
        },
      });
    } catch (err) {
      console.log('Base de dados já está populada');
    } finally {
      await prisma.$disconnect();
    }
  }

  // Configuração do CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  // Escuta na porta 4000
  await app.listen(4000);

}

bootstrap();

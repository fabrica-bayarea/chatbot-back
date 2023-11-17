import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  if(process.env.NODE_ENV === 'development'){
    const prisma = new PrismaClient();
    try{
      await prisma.usuario.create({
        data: {
          nome: process.env.NOME_USUARIO,
          email: process.env.EMAIL_USUARIO,
          senha: process.env.SENHA_USUARIO,
        },
      });
    }catch(err){
      console.log('Base de dados já está populada');
    }finally {
      await prisma.$disconnect();
    }
  }
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',  
  });
  await app.listen(3000);
}
bootstrap();

import { Controller, Get, Param } from '@nestjs/common';

@Controller('prisma')
export class PrismaController {
  @Get(':id')
  findOne(@Param('id') id: string): string {
    
    return `PrismaController - findOne: ${id}`;
  }

}

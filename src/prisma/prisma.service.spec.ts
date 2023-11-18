import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

 
  it('should find a record by ID', async () => {
    const id = 1;
    const record = await service.findById(id);
    expect(record).toBeDefined();
    expect(record.id).toEqual(id);
   
  });
});

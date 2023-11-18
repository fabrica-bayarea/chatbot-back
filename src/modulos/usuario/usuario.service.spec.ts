import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioService],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return user by email', async () => {
    const email = 'test@example.com';
    const user = await service.getUsuario(email);
    expect(user).toBeDefined();
    expect(user.email).toEqual(email);

  });
});

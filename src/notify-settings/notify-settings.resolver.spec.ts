import { Test, TestingModule } from '@nestjs/testing';
import { NotifySettingsResolver } from './notify-settings.resolver';

describe('NotifySettingsResolver', () => {
  let service: NotifySettingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotifySettingsResolver],
    }).compile();
    
    service = module.get<NotifySettingsResolver>(NotifySettingsResolver);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

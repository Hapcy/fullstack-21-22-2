import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Label } from './entities/label';
import { LabelsService } from './labels.service';

describe('LabelsService', () => {
  let service: LabelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LabelsService,
        { provide: getRepositoryToken(Label), useValue: {} },
      ],
    }).compile();

    service = module.get<LabelsService>(LabelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

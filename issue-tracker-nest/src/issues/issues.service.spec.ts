import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { Label } from '../labels/entities/label';
import { User } from '../users/entities/user';
import { Issue } from './entities/issue';
import { IssuesService } from './issues.service';

describe('IssuesService', () => {
  let service: IssuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IssuesService,
        { provide: getRepositoryToken(Issue), useValue: {} },
        { provide: getRepositoryToken(Label), useValue: {} },
        { provide: getRepositoryToken(User), useValue: {} },
      ],
    }).compile();

    service = module.get<IssuesService>(IssuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

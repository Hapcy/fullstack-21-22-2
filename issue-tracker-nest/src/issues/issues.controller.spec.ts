import { Test, TestingModule } from '@nestjs/testing';
import { IssuesController } from './issues.controller';
import { IssuesService } from './issues.service';

describe('IssuesController', () => {
  let controller: IssuesController;
  let issuesService: any;

  beforeEach(async () => {
    issuesService = {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssuesController],
      providers: [{ provide: IssuesService, useValue: issuesService }],
    }).compile();

    controller = module.get<IssuesController>(IssuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should give empty array when no issues have been created', () => {
    issuesService.findAll.mockReturnValue([]);
    expect(controller.findAll({})).resolves.toEqual([]);
  });

  it('should throw an error when the requested issue is missing', () => {
    issuesService.findOne.mockReturnValue(undefined);
    expect(controller.findOne(1)).rejects.toThrow();
  });
});

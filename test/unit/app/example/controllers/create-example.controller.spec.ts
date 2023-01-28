import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';

import { ExampleTypeORMRepository } from '@app/@common/infrastructure/persistence/database/typeorm/repository/example-typeorm.repository';
import { CreateExampleController } from '@app/example/controllers';
import { CreateExampleInput } from '@app/example/dto';
import { CreateExampleUseCase } from '@app/example/use-cases';

const dataSourceMock = jest.fn(() => ({
  createEntityManager(): any {
    return {
      connection: {
        getMetadata: jest.fn((target) => target),
      },
      create: jest.fn(() => ({
        id: '918757a8-d2cc-46f3-b75c-c0b14473a07d',
        title: 'Title',
        description: 'Description',
        status: 'ACTIVE',
        created_at: new Date('2023-10-10 10:10:12'),
        updated_at: new Date('2023-10-10 10:10:13'),
      })),
      save: jest.fn(() => true),
    };
  },
  createQueryRunner(): any {
    return {
      // mock do entity manager
    };
  },
}));
describe('CreateExampleController', () => {
  let controller: CreateExampleController;
  let createExampleUseCase: CreateExampleUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CreateExampleController],
      providers: [
        {
          provide: DataSource,
          useFactory: dataSourceMock,
        },
        CreateExampleUseCase,
        ExampleTypeORMRepository,
      ],
    }).compile();

    controller = app.get<CreateExampleController>(CreateExampleController);
    createExampleUseCase = app.get<CreateExampleUseCase>(CreateExampleUseCase);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
    expect(createExampleUseCase).toBeDefined();
  });

  it('Should verify if execute controller has called', async () => {
    const payload: CreateExampleInput = {
      title: 'title',
      description: 'description',
      status: 'ACTIVE',
    };

    const executeSpy = jest.spyOn(controller, 'execute');
    await controller.execute(payload);
    expect(executeSpy).toHaveBeenCalled();
    expect(executeSpy).toHaveBeenCalledTimes(1);
  });
});

import { ExampleTypeORMRepository } from '@app/@common/infrastructure/persistence/database/typeorm/repository/example-typeorm.repository';
import { ListAllExampleController } from '@app/example/controllers';
import { ListAllExampleUseCase } from '@app/example/use-cases';

const dataSourceMock: any = {
  createEntityManager(): any {
    return {
      connection: {
        getMetadata: jest.fn((target) => target),
      },
      find: jest.fn(() => [
        {
          id: '918757a8-d2cc-46f3-b75c-c0b14473a07d',
          title: 'Title',
          description: 'Description',
          status: 'ACTIVE',
          created_at: new Date('2023-10-10 10:10:12'),
          updated_at: new Date('2023-10-10 10:10:13'),
        },
      ]),
    };
  },
  createQueryRunner(): any {
    return {
      // mock do entity manager
    };
  },
};
describe('ListAllExampleController', () => {
  let controller: ListAllExampleController;
  let listAllExampleUseCase: ListAllExampleUseCase;
  let repository: ExampleTypeORMRepository;

  beforeEach(async () => {
    repository = new ExampleTypeORMRepository(dataSourceMock);
    listAllExampleUseCase = new ListAllExampleUseCase(repository);
    controller = new ListAllExampleController(listAllExampleUseCase);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
    expect(listAllExampleUseCase).toBeDefined();
  });

  it('Should verify if execute controller has called', async () => {
    const executeSpy = jest.spyOn(controller, 'execute');
    await controller.execute();
    expect(executeSpy).toHaveBeenCalled();
    expect(executeSpy).toHaveBeenCalledTimes(1);
  });
});

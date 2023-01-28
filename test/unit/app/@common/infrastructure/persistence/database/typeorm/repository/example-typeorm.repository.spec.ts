import { dataSource } from '@app/@common/infrastructure/persistence/database/typeorm/config/typeorm.config';
import { ExampleTypeORMRepository } from '@app/@common/infrastructure/persistence/database/typeorm/repository/example-typeorm.repository';
import { CreateExampleInput } from '@app/example/dto';

jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  DataSource: jest.fn(() => ({
    createEntityManager: jest.fn(),
    createQueryRunner: jest.fn(),
  })),
}));

describe('ExampleTypeORMRepository', () => {
  beforeEach(async () => {
    jest.clearAllMocks();
  });

  test('Should return response false (boolean)', async () => {
    const payload: CreateExampleInput = {
      title: 'title',
      description: 'description',
      status: 'ACTIVE',
    };
    jest.spyOn(dataSource, 'createEntityManager').mockImplementation(
      () =>
        ({
          connection: {
            getMetadata: jest.fn((target) => target),
          },
          create: jest.fn(() => payload),
          save: jest.fn(() => true),
        } as any),
    );

    const repository = new ExampleTypeORMRepository(dataSource);

    const createSpy = jest.spyOn(repository, 'saveExample');
    await repository.saveExample(payload);

    expect(createSpy).toHaveBeenCalled();
    expect(createSpy).toHaveBeenCalledTimes(1);
  });
});

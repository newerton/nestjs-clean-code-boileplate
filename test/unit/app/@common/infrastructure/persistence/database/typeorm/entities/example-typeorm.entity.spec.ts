import { ExampleTypeORM } from '@app/@common/infrastructure/persistence/database/typeorm/entities/example-typeorm.entity';

describe('ExampleTypeORM', () => {
  let exampleTypeORM: ExampleTypeORM;

  beforeEach(() => {
    exampleTypeORM = new ExampleTypeORM();
    exampleTypeORM.title = 'title';
    exampleTypeORM.description = 'description';
    exampleTypeORM.status = 'status';
    exampleTypeORM.created_at = new Date('2023-10-10 10:10:12');
    exampleTypeORM.updated_at = new Date('2023-10-10 10:10:13');
  });
  test('Should instantiate ExampleTypeORM correctly', () => {
    expect(exampleTypeORM.title).toBe('title');
    expect(exampleTypeORM.description).toBe('description');
    expect(exampleTypeORM.status).toBe('status');
    expect(exampleTypeORM.created_at).toStrictEqual(
      new Date('2023-10-10 10:10:12'),
    );
    expect(exampleTypeORM.updated_at).toStrictEqual(
      new Date('2023-10-10 10:10:13'),
    );
  });

  test('Should instantiate of each attributes', () => {
    expect(typeof exampleTypeORM.title === 'string').toBeTruthy();
    expect(typeof exampleTypeORM.description === 'string').toBeTruthy();
    expect(typeof exampleTypeORM.status === 'string').toBeTruthy();
    expect(typeof exampleTypeORM.created_at === 'object').toBeTruthy();
    expect(typeof exampleTypeORM.updated_at === 'object').toBeTruthy();

    expect(exampleTypeORM.created_at).toBeInstanceOf(Date);
    expect(exampleTypeORM.updated_at).toBeInstanceOf(Date);
  });
});

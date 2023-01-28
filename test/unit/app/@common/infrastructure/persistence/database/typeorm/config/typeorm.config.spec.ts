import { typeormConfig } from '@app/@common/infrastructure/persistence/database/typeorm/config/typeorm.config';
import { DatabaseServerConfig } from '@core/@shared/infrastructure/config/env/database-server.config';

jest.mock('typeorm', () => ({
  ...jest.requireActual('typeorm'),
  DataSource: jest.fn(() => ({
    createEntityManager: jest.fn(),
    createQueryRunner: jest.fn(),
  })),
}));

describe('typeormConfig ', () => {
  test('Should validate all attributes in defaultConfig', () => {
    expect(typeormConfig.type).toBe(DatabaseServerConfig.DB_DIALECT);
    expect(typeormConfig.host).toBe(DatabaseServerConfig.DB_HOST);
    expect(typeormConfig.port).toBe(DatabaseServerConfig.DB_PORT);
    expect(typeormConfig.username).toBe(DatabaseServerConfig.DB_USER);
    expect(typeormConfig.password).toBe(DatabaseServerConfig.DB_PASSWORD);
    expect(typeormConfig.database).toBe(DatabaseServerConfig.DB_DATABASE);
    expect(typeormConfig.logging).toBe(DatabaseServerConfig.DB_LOGGING);
    expect(typeormConfig.charset).toBe('utf8mb4_unicode_ci');
  });

  // test('Should verify if dataSource is instance of DataSource', () => {
  //   expect(dataSource).toBeInstanceOf(DataSource);
  // });
});

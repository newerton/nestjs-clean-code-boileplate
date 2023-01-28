import { DatabaseServerConfig } from '@core/@shared/infrastructure/config/env/database-server.config';

describe('DatabaseServerConfig', () => {
  test('Should validate DB_DIALECT config attribute', () => {
    const serverConfig = DatabaseServerConfig.DB_DIALECT;
    expect(typeof serverConfig === 'string').toBeTruthy();
    expect(typeof serverConfig === 'string').not.toBeFalsy();
  });

  test('Should validate DB_HOST config attribute', () => {
    const serverConfig = DatabaseServerConfig.DB_HOST;
    expect(typeof serverConfig === 'string').toBeTruthy();
    expect(typeof serverConfig === 'string').not.toBeFalsy();
  });

  test('Should validate DB_PORT config attribute', () => {
    const serverConfig = DatabaseServerConfig.DB_PORT;
    expect(typeof serverConfig === 'number').toBeTruthy();
    expect(typeof serverConfig === 'number').not.toBeFalsy();
  });

  test('Should validate DB_USER config attribute', () => {
    const serverConfig = DatabaseServerConfig.DB_USER;
    expect(typeof serverConfig === 'string').toBeTruthy();
    expect(typeof serverConfig === 'string').not.toBeFalsy();
  });

  test('Should validate DB_PASSWORD config attribute', () => {
    const serverConfig = DatabaseServerConfig.DB_PASSWORD;
    expect(typeof serverConfig === 'string').toBeTruthy();
    expect(typeof serverConfig === 'string').not.toBeFalsy();
  });

  test('Should validate DB_DATABASE config attribute', () => {
    const serverConfig = DatabaseServerConfig.DB_DATABASE;
    expect(typeof serverConfig === 'string').toBeTruthy();
    expect(typeof serverConfig === 'string').not.toBeFalsy();
  });

  test('Should validate DB_LOGGING config attribute', () => {
    const serverConfig = DatabaseServerConfig.DB_LOGGING;
    expect(typeof serverConfig === 'boolean').toBeTruthy();
    expect(typeof serverConfig === 'boolean').not.toBeFalsy();
  });
});

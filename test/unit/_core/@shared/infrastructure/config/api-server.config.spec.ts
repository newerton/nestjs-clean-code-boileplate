import { ApiServerConfig } from '@core/@shared/infrastructure/config/env/api-server.config';

describe('ApiServerConfig', () => {
  test('Should validate ENV config attribute', () => {
    const apiServerConfig = ApiServerConfig.ENV;
    expect(typeof apiServerConfig === 'string').toBeTruthy();
    expect(typeof apiServerConfig === 'string').not.toBeFalsy();
  });

  test('Should validate PORT config attribute', () => {
    const apiServerConfig = ApiServerConfig.PORT;
    expect(typeof apiServerConfig === 'number').toBeTruthy();
    expect(typeof apiServerConfig === 'number').not.toBeFalsy();
  });

  test('Should validate API_LOG_ENABLE config attribute', () => {
    const apiServerConfig = ApiServerConfig.LOG_ENABLE;
    expect(typeof apiServerConfig === 'boolean').toBeTruthy();
    expect(typeof apiServerConfig === 'boolean').not.toBeFalsy();
  });
});

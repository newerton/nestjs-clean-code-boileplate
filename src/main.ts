import 'dotenv/config';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { applySwagger } from '@app/@common/application/config/swagger.config';
import { ApiServerConfig } from '@core/@shared/infrastructure/config/env/api-server.config';

import { MainModule } from './main.module';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  app.enableShutdownHooks();

  applySwagger(app);

  await app.listen(ApiServerConfig.PORT).then(() => {
    logger.log(`🚀 Server ready at http://localhost:${ApiServerConfig.PORT}`);
  });
}
bootstrap();

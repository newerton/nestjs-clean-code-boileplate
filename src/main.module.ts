import { Module, Provider } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HttpExceptionFilter } from '@app/@common/application/exceptions/filter/http-exception.filter';
import { JoiValidationExceptionFilter } from '@app/@common/application/exceptions/filter/joi-validation-exception.filter';
import { HttpLoggingInterceptor } from '@app/@common/application/interceptors/http-logging.interceptor';
import { typeormConfig } from '@app/@common/infrastructure/persistence/database/typeorm/config/typeorm.config';
import { ExampleModule } from '@app/example/example.module';
import { ApiServerConfig } from '@core/@shared/infrastructure/config/env/api-server.config';

import { MainController } from './main.controller';

const providers: Provider[] = [
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
  {
    provide: APP_FILTER,
    useClass: JoiValidationExceptionFilter,
  },
];

if (ApiServerConfig.LOG_ENABLE) {
  providers.push({
    provide: APP_INTERCEPTOR,
    useClass: HttpLoggingInterceptor,
  });
}

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), ExampleModule],
  controllers: [MainController],
  providers,
})
export class MainModule {}

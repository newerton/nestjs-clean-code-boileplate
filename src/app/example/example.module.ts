import { ExampleTypeORMRepository } from '@app/@common/infrastructure/persistence/database/typeorm/repository/example-typeorm.repository';
import { Module } from '@nestjs/common';

import {
  CreateExampleController,
  ListAllExampleController,
} from './controllers';
import { CreateExampleUseCase, ListAllExampleUseCase } from './use-cases';

@Module({
  controllers: [CreateExampleController, ListAllExampleController],
  providers: [
    CreateExampleUseCase,
    ListAllExampleUseCase,
    ExampleTypeORMRepository,
  ],
})
export class ExampleModule {}

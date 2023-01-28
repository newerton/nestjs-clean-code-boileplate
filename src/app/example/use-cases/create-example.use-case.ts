import { Injectable } from '@nestjs/common';

import { ExampleTypeORMRepository } from '@app/@common/infrastructure/persistence/database/typeorm/repository/example-typeorm.repository';

import { CreateExampleInput } from '../dto';

@Injectable()
export class CreateExampleUseCase {
  constructor(private readonly repository: ExampleTypeORMRepository) {}

  execute(input: CreateExampleInput) {
    return this.repository.saveExample(input);
  }
}

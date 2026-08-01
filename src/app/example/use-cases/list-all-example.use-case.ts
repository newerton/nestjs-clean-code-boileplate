import { ExampleTypeORM } from '@app/@common/infrastructure/persistence/database/typeorm/entities/example-typeorm.entity';
import { ExampleTypeORMRepository } from '@app/@common/infrastructure/persistence/database/typeorm/repository/example-typeorm.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllExampleUseCase {
  constructor(private readonly repository: ExampleTypeORMRepository) {}

  async execute(): Promise<ExampleTypeORM[]> {
    return this.repository.find();
  }
}

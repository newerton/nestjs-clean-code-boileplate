import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ExampleTypeORM } from '@app/@common/infrastructure/persistence/database/typeorm/entities/example-typeorm.entity';
import { CreateExampleInput } from '@app/example/dto';

@Injectable()
export class ExampleTypeORMRepository extends Repository<ExampleTypeORM> {
  constructor(private readonly dataSource: DataSource) {
    super(
      ExampleTypeORM,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }

  async saveExample(input: CreateExampleInput): Promise<void> {
    const createData = this.create(input);
    if (createData) {
      await this.save(createData);
    }
  }
}

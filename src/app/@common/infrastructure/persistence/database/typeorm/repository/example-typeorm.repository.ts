import { ExampleTypeORM } from '@app/@common/infrastructure/persistence/database/typeorm/entities/example-typeorm.entity';
import { CreateExampleInput } from '@app/example/dto';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ExampleTypeORMRepository extends Repository<ExampleTypeORM> {
  constructor(readonly dataSource: DataSource) {
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

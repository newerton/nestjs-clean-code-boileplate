import { HttpStatus } from '@nestjs/common';
import { Controller, Get, HttpCode } from '@nestjs/common/decorators';
import {
  ApiBadRequestResponse,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { ErrorSchema } from '@app/@common/application/documentations/openapi/swagger/error.schema';
import { ExampleTypeORM } from '@app/@common/infrastructure/persistence/database/typeorm/entities/example-typeorm.entity';

import { ListAllExampleUseCase } from '../use-cases';

@Controller('example')
@ApiTags('example')
@ApiBadRequestResponse({ description: 'Bad Request' })
@ApiUnprocessableEntityResponse({
  description: 'Unprocessable Entity',
})
export class ListAllExampleController {
  constructor(private readonly useCase: ListAllExampleUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: ErrorSchema })
  async execute(): Promise<ExampleTypeORM[]> {
    return this.useCase.execute();
  }
}

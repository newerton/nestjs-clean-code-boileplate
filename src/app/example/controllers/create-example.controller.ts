import { HttpStatus } from '@nestjs/common';
import { Body, Controller, HttpCode, Post } from '@nestjs/common/decorators';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { ErrorSchema } from '@app/@common/application/documentations/openapi/swagger/error.schema';
import { JoiValidationPipe } from '@app/@common/application/pipes/joi-validation.pipe';

import { CreateExampleInput } from '../dto';
import { CreateExampleUseCase } from '../use-cases';
import { CreateExampleSchemaValidation } from '../validations';

@Controller('example')
@ApiTags('example')
@ApiBadRequestResponse({ description: 'Bad Request' })
@ApiUnprocessableEntityResponse({
  description: 'Unprocessable Entity',
})
export class CreateExampleController {
  constructor(private readonly useCase: CreateExampleUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CreateExampleInput })
  @ApiResponse({ status: HttpStatus.CREATED, type: ErrorSchema })
  execute(
    @Body(new JoiValidationPipe(new CreateExampleSchemaValidation()))
    createRouteDto: CreateExampleInput,
  ): Promise<void> {
    return this.useCase.execute(createRouteDto);
  }
}

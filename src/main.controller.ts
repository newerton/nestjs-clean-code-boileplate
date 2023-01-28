import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBadRequestResponse, ApiResponse } from '@nestjs/swagger';

import { ErrorSchema } from '@app/@common/application/documentations/openapi/swagger/error.schema';

@Controller({
  version: '1',
})
@ApiBadRequestResponse({ description: 'Bad Request' })
export class MainController {
  @Get('healthcheck')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: ErrorSchema })
  execute(): { status: string } {
    return {
      status: `[${process.env.NODE_ENV}] nestjs-api is online`,
    };
  }
}

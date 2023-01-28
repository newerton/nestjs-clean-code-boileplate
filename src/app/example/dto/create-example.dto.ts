import { ApiProperty } from '@nestjs/swagger';

export class CreateExampleInput {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: string;
}

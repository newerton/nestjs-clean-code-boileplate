import { ApiProperty } from '@nestjs/swagger';

export class ListAllExampleOutput {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: string;
}

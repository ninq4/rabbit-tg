import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PayloadDto {
  @ApiProperty({
    example: 'Hello World',
  })
  @IsNotEmpty()
  message: string;
}

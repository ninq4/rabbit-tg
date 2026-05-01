import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsObject,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';

export class BaseEvent<T> {
  @IsUUID('4', { message: 'id должен быть UUID v4' })
  id: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @Type(() => Number)
  timestamp: number;

  @IsObject()
  @IsNotEmpty()
  payload: T;
}

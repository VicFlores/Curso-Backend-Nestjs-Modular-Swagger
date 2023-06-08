import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriesDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}

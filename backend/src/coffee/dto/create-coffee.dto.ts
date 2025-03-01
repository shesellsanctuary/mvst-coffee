import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  @MinLength(2, { message: 'Coffee name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  image: string;

  description: string;

  @IsInt()
  price: number;

  @IsString()
  @IsEnum(['arabic', 'robusta'])
  type: string;
}

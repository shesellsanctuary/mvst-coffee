import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
  IsUrl,
  IsNumber,
} from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  @MinLength(2, { message: 'Coffee name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsString()
  @MinLength(2, {
    message: 'Coffee description must have atleast 2 characters.',
  })
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsEnum(['arabic', 'robusta'])
  type: string;
}

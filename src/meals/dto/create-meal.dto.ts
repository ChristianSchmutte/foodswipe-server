import { IsNotEmpty } from 'class-validator';
export class CreateMealDto {
  @IsNotEmpty()
  restarantId: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  description: string;
}

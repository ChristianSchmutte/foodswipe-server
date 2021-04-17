import {
  IsEmail,
  IsLatitude,
  IsLongitude,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
export class RestaurantCredentialsDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    // eslint-disable-next-line prettier/prettier
    { message: 'Password too weak' },
  )
  password: string;

  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;
}

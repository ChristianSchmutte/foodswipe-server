import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RestaurantCredentialsDto } from './dto/restaurant-credentials.dto';
import { Restaurant } from './user.entities';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) restaurantCredentialsDto: RestaurantCredentialsDto,
  ): Promise<Restaurant> {
    // TODO implement validation pipes
    return this.authService.signUp(restaurantCredentialsDto);
  }
}

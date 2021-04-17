import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateRestarantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './user.entities';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() createRestarantDto: CreateRestarantDto): Promise<Restaurant> {
    // TODO implement validation pipes
    return this.authService.signUp(createRestarantDto);
  }
}

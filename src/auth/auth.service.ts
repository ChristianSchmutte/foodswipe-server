import { Injectable } from '@nestjs/common';
import { RestaurantCredentialsDto } from './dto/restaurant-credentials.dto';
import { Restaurant } from './user.entities';
import { RestaurantRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private restaurantRepository: RestaurantRepository) {}
  signUp(createRestarantDto: RestaurantCredentialsDto): Promise<Restaurant> {
    return this.restaurantRepository.createRestaurant(createRestarantDto);
  }
}

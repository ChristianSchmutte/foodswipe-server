import { Injectable } from '@nestjs/common';
import { CreateRestarantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './user.entities';
import { RestaurantRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private restaurantRepository: RestaurantRepository) {}
  signUp(createRestarantDto: CreateRestarantDto): Promise<Restaurant> {
    return this.restaurantRepository.createRestaurant(createRestarantDto);
  }
}

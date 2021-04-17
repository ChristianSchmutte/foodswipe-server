import { Restaurant } from './user.entities';
import { EntityRepository, Repository } from 'typeorm';
import { RestaurantCredentialsDto } from './dto/restaurant-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Restaurant)
export class RestaurantRepository extends Repository<Restaurant> {
  async createRestaurant(
    createRestarantDto: RestaurantCredentialsDto,
  ): Promise<Restaurant> {
    const { email, password, longitude, latitude } = createRestarantDto;
    const restaurant = this.create();
    restaurant.email = email;
    restaurant.password = password;
    restaurant.latitude = latitude;
    restaurant.longitude = longitude;
    try {
      await restaurant.save();
    } catch (error) {
      if (error.code === '23505') {
        // email already exists
        throw new ConflictException('Email address already taken');
      } else {
        throw new InternalServerErrorException('Server error occured');
      }
    }
    return restaurant;
  }
}

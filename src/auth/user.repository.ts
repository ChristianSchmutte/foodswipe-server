import { Restaurant } from './user.entities';
import { EntityRepository, Repository } from 'typeorm';
import { CreateRestarantDto } from './dto/create-restaurant.dto';

@EntityRepository(Restaurant)
export class RestaurantRepository extends Repository<Restaurant> {
  async createRestaurant(
    createRestarantDto: CreateRestarantDto,
  ): Promise<Restaurant> {
    const { email, password, longitude, latitude } = createRestarantDto;
    const restaurant = this.create();
    restaurant.email = email;
    restaurant.password = password;
    restaurant.latitude = latitude;
    restaurant.longitude = longitude;
    await restaurant.save();
    return restaurant;
  }
}

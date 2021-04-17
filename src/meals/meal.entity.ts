import { Restaurant } from 'src/auth/user.entities';
import {
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Meal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  image: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.meals)
  restaurant: Restaurant;
}

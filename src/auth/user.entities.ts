import { Meal } from 'src/meals/meal.entity';
import {
  Entity,
  BaseEntity,
  Unique,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'float' })
  latitude: number;

  @Column({ type: 'float' })
  longitude: number;

  @OneToMany(() => Meal, (meal) => meal.restaurant)
  meals: Meal[];
}

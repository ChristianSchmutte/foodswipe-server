import { Meal } from './meal.entity';
import { Repository, EntityRepository, DeleteResult } from 'typeorm';
import { CreateMealDto } from './dto/create-meal.dto';
import { Logger } from '@nestjs/common';
import { UpdateMealDto } from './dto/update-meal.dto';

@EntityRepository(Meal)
export class MealRepository extends Repository<Meal> {
  private logger = new Logger();

  async getMeals(): Promise<Meal[]> {
    // TODO SQL query for pagination
    const query = this.createQueryBuilder('meal');

    const meals = await query.getMany();
    return meals;
  }

  async createMeal(createMealDto: CreateMealDto): Promise<Meal> {
    const { name, price, description, image } = createMealDto;
    const meal = this.create();
    meal.name = name;
    meal.price = price;
    meal.description = description;
    meal.image = image;

    await meal.save();

    return meal;
  }

  async updateMeal(id: number, updateMealDto: UpdateMealDto): Promise<Meal> {
    const mealUpdated = await this.findOne(id);
    const keys = Object.keys(updateMealDto);
    keys.forEach((k) => {
      mealUpdated[k] = updateMealDto[k];
    });

    await mealUpdated.save();
    return mealUpdated;
  }

  async deleteMeal(id: number): Promise<DeleteResult> {
    return await Meal.delete(id);
  }
}

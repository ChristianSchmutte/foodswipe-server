import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './meal.entity';
import { MealRepository } from './meal.repository';

@Injectable()
export class MealsService {
  // getMeals(): Meal[] {
  //   return this.meals;
  // }
  constructor(private mealRepository: MealRepository) {}

  async getMeals(): Promise<Meal[]> {
    // TODO get-meals-dto for SQL pagination
    return this.mealRepository.getMeals();
  }

  async createMeal(createMealDto: CreateMealDto): Promise<Meal> {
    return this.mealRepository.createMeal(createMealDto);
  }

  async deleteMeal(id: number): Promise<void> {
    const { affected } = await this.mealRepository.deleteMeal(id);

    if (affected === 0)
      throw new NotFoundException(`Meal with ${id} not found.`);
  }

  async updateMeal(id: number, updateMealDto: UpdateMealDto): Promise<Meal> {
    return this.mealRepository.updateMeal(id, updateMealDto);
  }
}

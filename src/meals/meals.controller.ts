import { MealsService } from './meals.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { Meal } from './meal.entity';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  getMeals(): Promise<Meal[]> {
    return this.mealsService.getMeals();
  }
  @Post()
  createMeal(@Body() createMealDto: CreateMealDto): Promise<Meal> {
    return this.mealsService.createMeal(createMealDto);
  }

  @Delete('/:id')
  deleteMeal(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.mealsService.deleteMeal(id);
  }
  @Put('/:id')
  updateMeal(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMealDto: UpdateMealDto,
  ): Promise<Meal> {
    return this.mealsService.updateMeal(id, updateMealDto);
  }
}

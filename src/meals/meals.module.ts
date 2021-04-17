import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { MealRepository } from './meal.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([MealRepository]), AuthModule],
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}

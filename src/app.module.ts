import { Module } from '@nestjs/common';
import { MealsModule } from './meals/meals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'foodswipe-db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    MealsModule,
    AuthModule,
  ],
})
export class AppModule {}

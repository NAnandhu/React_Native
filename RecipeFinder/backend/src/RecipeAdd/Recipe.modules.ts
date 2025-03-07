import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeController } from './Recipe.controller';
import { RecipeService } from './Recipe.service';
import { Recipe } from './Recipe.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Recipe])], // Import TypeORM repository
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}

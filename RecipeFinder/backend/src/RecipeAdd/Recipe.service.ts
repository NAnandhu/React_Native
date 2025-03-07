
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './Recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}
  async createRecipe(data: { Itemname: string; Incrediants: string; Recipe: string }) {
    const existingRecipe = await this.recipeRepository.findOne({ where: { Itemname: data.Itemname } });

    if (existingRecipe) {
      throw new Error('Itemname must be unique');
    }
    const recipe = this.recipeRepository.create(data);
    return this.recipeRepository.save(recipe);
  }

  async getAllRecipes() {
    return this.recipeRepository.find();
  }

  async getRecipeByItemname(Itemname: string) {
    const recipe = await this.recipeRepository.findOne({ where: { Itemname } });
    if (!recipe) throw new NotFoundException(`Recipe with Itemname ${Itemname} not found`);
    return recipe;
  }

  async deleteRecipe(id: string) {
    const result = await this.recipeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return { message: 'Recipe deleted successfully' };
  }
  async updateRecipe(id: string, updateData: { Itemname?: string; Incrediants?: string; Recipe?: string }) {
    const recipe = await this.recipeRepository.findOne({ where: { id: parseInt(id, 10) } });
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    
    Object.assign(recipe, updateData);
    return this.recipeRepository.save(recipe);
  }
  
}


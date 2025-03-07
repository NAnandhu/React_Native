
import { Controller, Post, Get, Param, Body, Delete, Patch } from '@nestjs/common';
import { RecipeService } from './Recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}
  @Post('add')
  async addRecipe(@Body() body: { Itemname: string; Incrediants: string; Recipe: string }) {
    return this.recipeService.createRecipe(body);
  }
  @Get('all')
  async getAllRecipes() {
    return this.recipeService.getAllRecipes();
  }

  @Get(':Itemname')
  async getRecipeByItemname(@Param('Itemname') Itemname: string) {
    return this.recipeService.getRecipeByItemname(Itemname);
  }

  @Delete(':id')
  async deleteRecipe(@Param('id') id: string) {
    return this.recipeService.deleteRecipe(id);
  }
  @Patch(':id')
  async updateRecipe(@Param('id') id: string, @Body() updateData: { Itemname?: string; Incrediants?: string; Recipe?: string }) {
    return this.recipeService.updateRecipe(id, updateData);
  }

  
}

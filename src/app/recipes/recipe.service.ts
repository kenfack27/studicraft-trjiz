import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  /*  private recipe: Recipe[] = [
    new Recipe(
      'recipe name',
      'description',
      'https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg',
      [new ingredients('haricot', 5), new ingredients('mais', 3)]
    ),
    new Recipe(
      'snk',
      'shingeki no kyojin',
      'https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg',
      [
        new ingredients('titan assaillant', 1),
        new ingredients('titan deviant', 100),
      ]
    ),
  ];*/
  private recipe: Recipe[] = [];
  setRecipes(recipes: Recipe[]) {
    this.recipe = recipes;
    this.recipeChanged.next(this.recipe.slice());
  }
  getRecipes() {
    return this.recipe.slice();
  }
  getRecipe(index: number) {
    return this.recipe.slice()[index];
  }
  constructor(private slService: ShoppingListService) {}
  addIngredientsToShoppingList(ingredient: ingredients[]) {
    this.slService.addIngredients(ingredient);
  }
  addRecipe(recipe: Recipe) {
    this.recipe.push(recipe);
    this.recipeChanged.next(this.recipe.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipe[index] = newRecipe;
    this.recipeChanged.next(this.recipe.slice());
  }
  deleteRecipe(index: number) {
    this.recipe.splice(index, 1);
    this.recipeChanged.next(this.recipe.slice());
  }
}

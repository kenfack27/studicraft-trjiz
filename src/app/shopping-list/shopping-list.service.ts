import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredients } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<ingredients[]>();
  startedEditing = new Subject<number>();
  private ingredients: ingredients[] = [
    new ingredients('Apples', 5),
    new ingredients('Tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: ingredients[]) {
    //for (let ingredient of ingredients) {
    //this.addIngredient(ingredient);
    //}
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  updateIngredient(index: number, newIngredient: ingredients) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

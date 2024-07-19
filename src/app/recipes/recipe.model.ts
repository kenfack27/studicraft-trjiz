import { ingredients } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: ingredients[];
  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredient: ingredients[]
  ) {
    (this.name = name);
      (this.description = description);
      (this.imagePath = imagePath);
    this.ingredients = ingredient;
  }
}

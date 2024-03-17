import { EventEmitter, Injectable } from '@angular/core'

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>;

    private recipes: Recipe[] = [
        new Recipe('Recipe a', 
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('Meat',1),
          new Ingredient('Fires',20)
        ]),
        new Recipe('Recipe b', 
        'Easy recipes', 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
        [
          new Ingredient('Buns',2),
          new Ingredient('Meat',1)
        ])
      ];

      constructor(private slService: ShoppingListService) {

      }

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }


}
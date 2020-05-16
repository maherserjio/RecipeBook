import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/index';


@Injectable()
export class RecipeService {

      recipeChanged = new Subject<Recipe[]>();
      private recipes: Recipe[] = [];

   // private recipes: Recipe[] = [
   //      new Recipe('Tasty Schnitzel',
   //      'A super-tasty Schnitzel - just awesome!',
   //      'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fpc3YeZWwnLc%2Fmaxresdefault.jpg&f=1',
   //      [
   //          new Ingredient('Meat', 1),
   //          new Ingredient('French Fries', 20)
   //      ]
   //      ),
   //       new Recipe('Big Fat Burger',
   //       'What else you need to say?',
   //       'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rJjXuNdO9lEzsnxcAjDyrAHaFi%26pid%3DApi&f=1',
   //      [
   //          new Ingredient('Meat', 1),
   //          new Ingredient('Buns', 2),
   //          new Ingredient('French Fries', 20)
   //      ]
   //       )
   //    ];

    constructor(private shoppingListService: ShoppingListService) {
    }
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[] ) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number , newRecipe: Recipe ) {
       this.recipes[index] = newRecipe;
       this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipeChanged.next(this.recipes.slice());
    }

}





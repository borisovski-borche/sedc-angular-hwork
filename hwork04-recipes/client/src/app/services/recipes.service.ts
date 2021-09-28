import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { RecipesRepositoryService } from './recipes-repository.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(
    private recipesRepository: RecipesRepositoryService,
    private router: Router
  ) {}

  private _recipes = new BehaviorSubject<Recipe[]>([]);
  $recipes = this._recipes.asObservable();

  private _recipeToUpdate = new BehaviorSubject<Recipe>({} as Recipe);

  getRecipes() {
    this.recipesRepository
      .fetchRecipes()
      .subscribe((recipes) => this._recipes.next(recipes));
  }

  setRecipeToUpdate(recipe: Recipe) {
    this._recipeToUpdate.next(recipe);
  }

  getRecipeToUpdate() {
    return this._recipeToUpdate.getValue();
  }

  updateRecipesRender(recipe: Recipe) {
    const newRecipes = this._recipes
      .getValue()
      .map((arrRecipe) => (arrRecipe._id === recipe._id ? recipe : arrRecipe));

    this._recipes.next(newRecipes);
    this.router.navigate(['all-recipes']);
  }

  updateRecipe(recipe: Recipe) {
    this.recipesRepository
      .updateRecipeInDb(recipe._id, recipe)
      .subscribe((recipe) => this.updateRecipesRender(recipe));
  }

  addNewRecipe(recipe: Recipe) {
    this.recipesRepository.postNewRecipe(recipe).subscribe({
      error: (error) => {
        console.log(error.message);
      },
      complete: () => {
        this.getRecipes();
        this.router.navigate(['all-recipes']);
      },
    });
  }

  deleteRecipe(id: string) {
    this.recipesRepository.deleteRecipeInDb(id).subscribe({
      error: (error) => {
        console.log(error.message);
      },
      complete: () => {
        this.getRecipes();
      },
    });
  }
}

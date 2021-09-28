import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';
import { map } from 'rxjs/operators';
import { RecipesService } from './recipes.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesRepositoryService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/api';

  fetchRecipes() {
    return this.http
      .get(`${this.baseUrl}/recipes`)
      .pipe(map((recipes) => recipes as Recipe[]));
  }

  postNewRecipe(recipe: Recipe) {
    return this.http.post(`${this.baseUrl}/recipe`, recipe);
  }

  updateRecipeInDb(id: string, recipe: Recipe) {
    return this.http
      .put(`${this.baseUrl}/recipe/${id}`, recipe)
      .pipe(map((recipe) => recipe as Recipe));
  }

  deleteRecipeInDb(id: string) {
    return this.http.delete(`${this.baseUrl}/recipe/${id}`);
  }
}

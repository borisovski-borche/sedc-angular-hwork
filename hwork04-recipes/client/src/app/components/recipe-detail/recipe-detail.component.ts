import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private router: Router, private recipeService: RecipesService) {}

  onRecipeEdit() {
    this.recipeService.setRecipeToUpdate(this.recipe);
    this.router.navigate(['edit-recipe']);
  }

  onRecipeDelete() {
    this.recipeService.deleteRecipe(this.recipe._id);
  }

  ngOnInit(): void {}
}

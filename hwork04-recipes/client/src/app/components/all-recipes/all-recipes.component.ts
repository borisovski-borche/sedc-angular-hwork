import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss'],
})
export class AllRecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.$recipes.subscribe(
      (recipes) => (console.log(recipes), (this.recipes = recipes))
    );
  }
}

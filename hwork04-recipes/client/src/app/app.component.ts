import { Component, OnInit } from '@angular/core';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.getRecipes();
  }
}

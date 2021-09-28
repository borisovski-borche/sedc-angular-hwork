import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddRecipeComponent,
    AllRecipesComponent,
    NotFoundComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

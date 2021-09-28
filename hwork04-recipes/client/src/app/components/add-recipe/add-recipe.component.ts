import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  addRecipeForm: FormGroup;
  recipeToBeUpdated: Recipe = {} as Recipe;
  isEditing: boolean = false;

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) {}

  initForm() {
    this.addRecipeForm = new FormGroup({
      name: new FormControl(this.recipeToBeUpdated.name || null, [
        Validators.required,
      ]),
      description: new FormControl(this.recipeToBeUpdated.description || null, [
        Validators.required,
      ]),
      imgUrl: new FormControl(this.recipeToBeUpdated.imgUrl || null),
      ingredients: new FormArray(
        this.recipeToBeUpdated.ingredients?.map(
          (ingredient) => new FormControl(ingredient, [Validators.required])
        ) || []
      ),
    });
  }

  getIngredientCOntrols(): AbstractControl[] {
    return (<FormArray>this.addRecipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.addRecipeForm.get('ingredients'))?.push(control);
  }

  onDeleteIgredient(index: number) {
    (<FormArray>this.addRecipeForm.get('ingredients'))?.removeAt(index);
  }

  onFormSubmit() {
    const recipe = this.addRecipeForm.value as Recipe;

    this.isEditing
      ? this.recipeService.updateRecipe({
          ...recipe,
          _id: this.recipeToBeUpdated._id,
        })
      : this.recipeService.addNewRecipe(recipe);
  }

  ngOnInit(): void {
    this.isEditing =
      this.route.snapshot.routeConfig?.path === 'edit-recipe' ? true : false;

    if (this.isEditing) {
      this.recipeToBeUpdated = this.recipeService.getRecipeToUpdate();
    }

    this.initForm();
  }
}

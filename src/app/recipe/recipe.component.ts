import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }
  
  recipe : Recipe;
  ngOnInit() {
  }
  getSelectedRecipe(recipeEl : Recipe){
      this.recipe = recipeEl;
  }

}

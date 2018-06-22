import { Injectable, EventEmitter, Output } from '@angular/core';
import {Recipe}  from './recipe.model';
import { Ingredient } from '../shared/Ingredient.model';

export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe('Test Recipe',
    'LovelyRecipe'
    ,'https://atmedia.imgix.net/fef187547dd879130efed81d02568b2e5efaacb3?auto=format&q=45&w=600.0&h=750.0&fit=max&cs=strip'
    ,[
      new Ingredient('Rasogulla',6),
      new Ingredient('Wheat Floor',4)
    ]),
    new Recipe('Live Recipe','TastyRecipe','https://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg',[
      new Ingredient('Red Chilli',2),
      new Ingredient('Garlic Powder',1)
    ])
  ];

 @Output() recipeSelected = new EventEmitter<Recipe>();

  getRecipe(){  
   return this.recipes.slice();
  }
  constructor() { }
}

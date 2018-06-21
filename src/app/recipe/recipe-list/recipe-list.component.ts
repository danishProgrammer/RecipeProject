import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test Recipe','LovelyRecipe','https://atmedia.imgix.net/fef187547dd879130efed81d02568b2e5efaacb3?auto=format&q=45&w=600.0&h=750.0&fit=max&cs=strip'),
    new Recipe('Live Recipe','TastyRecipe','https://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  @Output() recipeListEvent = new EventEmitter<Recipe>();

  onSelected(recipe:Recipe){
    this.recipeListEvent.emit(recipe);
  }
  
}

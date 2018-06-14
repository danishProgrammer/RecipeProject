import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test Recipe','LovelyRecipe','https://atmedia.imgix.net/fef187547dd879130efed81d02568b2e5efaacb3?auto=format&q=45&w=600.0&h=750.0&fit=max&cs=strip'),
    new Recipe('Test Recipe','LovelyRecipe','https://atmedia.imgix.net/fef187547dd879130efed81d02568b2e5efaacb3?auto=format&q=45&w=600.0&h=750.0&fit=max&cs=strip')
  ];
  constructor() { }

  ngOnInit() {
  }

}

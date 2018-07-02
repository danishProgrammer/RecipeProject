import { Component, OnInit  } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/Ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute,Params } from "@angular/router";
import { RecipeService } from "src/app/recipe/recipe.service";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 recipeDetail : Recipe;
 id : number;

  constructor(private shoppingListService : ShoppingListService,
    private recipeService : RecipeService ,
    private activeRoute : ActivatedRoute) {}


  ingToShoppingList(ingredients : Ingredient[]){
     this.shoppingListService.mergeIngredeints(ingredients);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params : Params) => {
         this.id = +params["id"]; // we added plus to ensure we recieve number instead of the string pass to it.
         this.recipeDetail = this.recipeService.getSingRecipe(this.id);
      }
    )
  }

}

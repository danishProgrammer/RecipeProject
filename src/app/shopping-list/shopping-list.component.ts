import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers : []
})
export class ShoppingListComponent implements OnInit {
  ingredeints : Ingredient[];
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredeints = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredeints : Ingredient[]) => {
        this.ingredeints = ingredeints;
      }
    )
  }

  selectItem(ingredeint : Ingredient ){
    this.shoppingListService.selectIngredient(ingredeint);
  } 

}

import { Ingredient } from "../shared/Ingredient.model";
import { EventEmitter, Output } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
private  ingredeints : Ingredient[] = [
    new Ingredient('Bread',5),
    new Ingredient('Apple',8)
  ];

  addIngredient(ingredeint : Ingredient){
      this.ingredeints.push(ingredeint);
      this.ingredientsChanged.emit(this.ingredeints.slice());
  }
  getIngredient(){
    return this.ingredeints.slice();
  }

  constructor() { }
}

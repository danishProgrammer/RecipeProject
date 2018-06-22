import { Ingredient } from "../shared/Ingredient.model";
import { EventEmitter, Output } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  selectIngredeint = new EventEmitter<Ingredient>();
  private  ingredeints : Ingredient[] = [
    new Ingredient('Bread',5),
    new Ingredient('Apple',8)
  ];

  addIngredient(ingredeint : Ingredient){
      this.ingredeints.push(ingredeint);
      this.ingredientsChanged.emit(this.ingredeints.slice());
  }
  getIngredients(){
    return this.ingredeints.slice();
  }

  mergeIngredeints(ingredeintsArray : Ingredient[]){
    this.ingredeints = this.ingredeints.concat(ingredeintsArray);
  }

  deleteIngredeint(index){
    this.ingredeints.splice(index);
  }
  selectIngredient(ingredeint : Ingredient){
      this.selectIngredeint.emit(ingredeint)
  }

  constructor() {}
}

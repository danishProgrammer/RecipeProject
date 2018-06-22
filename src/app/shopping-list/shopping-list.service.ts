import { Ingredient } from "../shared/Ingredient.model";
import { EventEmitter, Output } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  selectIngredeint = new EventEmitter<Ingredient>();
  ingredientIndex : number;
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

  deleteIngredient(){
    // let index = this.ingredeints.indexOf(ingredeint);
    // if(index != -1)
     this.ingredeints.splice(this.ingredientIndex,1);
     this.ingredientsChanged.emit(this.ingredeints.slice());
  }
  selectIngredient(ingredeint : Ingredient, index ){
      this.selectIngredeint.emit(ingredeint);
      this.ingredientIndex = index;

  }

  constructor() {}
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list.component';
import { Ingredient } from '../../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('ingredientName') ingredientName : ElementRef;
 @ViewChild('ingredientAmount') ingredientAmount : ElementRef; 
 errorMsg : string;

  constructor(private shoppingListService : ShoppingListService) { }

  AddIngredient(){
      if(this.ingredientName.nativeElement.value == '' || this.ingredientAmount.nativeElement.value == ''){
          this.errorMsg = "Please Add Ingredeints Information"
      }
      else{
        this.errorMsg = undefined;
        const ingredeint = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value);
        this.shoppingListService.addIngredient(ingredeint);
      }
  }
  ClearInredient(){
    this.ingredientName.nativeElement.value = '';
    this.ingredientAmount.nativeElement.value = '';
  }
  DeleteIngredient(){
    this.ClearInredient();
    this.shoppingListService.deleteIngredient();    
  }

  ngOnInit() {
    this.shoppingListService.selectIngredeint.subscribe(
      (ingredient : Ingredient) => {
        this.ingredientName.nativeElement.value = ingredient.name;
          this.ingredientAmount.nativeElement.value = ingredient.amount;
      }
    )
  }

}

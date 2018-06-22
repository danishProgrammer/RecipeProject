import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list.component';
import { Ingredient } from '../../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('ingredientName') ingredientName : ElementRef;
 @ViewChild('ingredientAmount') ingredientAmount : ElementRef; 
 errorMsg : string;

 @Output() Ingredient = new EventEmitter<Ingredient>(); 
  constructor() { }

  AddIngredient(){
      if(this.ingredientName.nativeElement.value == '' || this.ingredientAmount.nativeElement.value == ''){
          this.errorMsg = "Please Add Ingredeints Information"
      }
      else{
        this.errorMsg = undefined;
        const ingredeint = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value);
        this.Ingredient.emit(ingredeint);
      }
     
     
  }
  ClearInredient(){
    this.ingredientName.nativeElement.value = '';
    this.ingredientAmount.nativeElement.value = '';
  }

  ngOnInit() {
  }

}

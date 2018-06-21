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

 @Output() Ingredient = new EventEmitter<Ingredient>(); 
  constructor() { }

  AddIngredient(){
      const ingredeint = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value);
      this.Ingredient.emit(ingredeint);
  }

  ngOnInit() {
  }

}

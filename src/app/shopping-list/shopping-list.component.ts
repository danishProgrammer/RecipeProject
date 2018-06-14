import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredeints : Ingredient[] = [
    new Ingredient('Bread',5),
    new Ingredient('Apple',8)
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { RecipeComponent } from "src/app/recipe/recipe.component";
import { ShoppingListComponent } from "src/app/shopping-list/shopping-list.component";
import { RecipeListComponent } from "src/app/recipe/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "src/app/recipe/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "src/app/recipe/recipe-detail/recipe-detail.component";
import { ShoppingEditComponent } from "src/app/shopping-list/shopping-edit/shopping-edit.component";
import { RecipeStartComponent } from "src/app/recipe/recipe-start/recipe-start.component";
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';


const appRoutes : Routes = [
    {path : '', redirectTo : '/shoppingList', pathMatch : 'full'},    
    {path : 'recipes', component : RecipeComponent , children : [
        {path : '' , component : RecipeStartComponent},
        {path : 'recipe-list' , component : RecipeListComponent},
        {path : 'recipe-item' , component : RecipeItemComponent},
        {path : 'new' , component : RecipeEditComponent},        
        {path : ':id/edit' , component : RecipeEditComponent},
        {path : ':id' , component : RecipeDetailComponent},
    ]},
    {path : 'shoppingList', component : ShoppingListComponent, children : [
        {path : 'shopping-edit' , component : ShoppingEditComponent}
    ]}
  ]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [RouterModule]
})
export class AppRoutingModule{

}
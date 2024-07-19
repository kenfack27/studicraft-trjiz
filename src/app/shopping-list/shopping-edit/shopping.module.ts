import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit.component";
import { ShoppingListComponent } from "../shopping-list.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { sharedModule } from "../../shared/shared.module";

 @NgModule({
  declarations:[
    ShoppingEditComponent,
    ShoppingListComponent,
  ],
  imports: [RouterModule,  FormsModule, ReactiveFormsModule,sharedModule],

 })
 export class shopppingModule{}

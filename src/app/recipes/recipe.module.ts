import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {StartComponent} from './start/start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RouterModule} from '@angular/router';
import {RecipesRoutingModule} from './recipes-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from "../Shared/shared.module";

@NgModule({
  declarations: [
  RecipesComponent,
  RecipeListComponent,
  RecipeDetailComponent,
  RecipeItemComponent,
  StartComponent,
  RecipeEditComponent,
],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    RecipesRoutingModule
  ]
})
export class RecipeModule {}

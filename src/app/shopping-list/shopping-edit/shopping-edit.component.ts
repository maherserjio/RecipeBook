import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/index';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy {

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slform: NgForm;

  constructor(private shoppingListService: ShoppingListService) {
   }

  ngOnInit() {
    this.subscription =
      this.shoppingListService.startedEditing.subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slform.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
      }
      );
  }

  OnSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name , value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient( this.editedItemIndex , newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.slform.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}







import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  public pizzaEdit!: Pizza;
  public form!: FormGroup;
  constructor(private apiService: ApiService, private router: Router) {
    this.pizzaEdit = this.router.getCurrentNavigation()?.extras?.state?.['pizza'] as Pizza;
    console.log(this.pizzaEdit)
  }

  editPizzaSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { name, imageUrl, ingredients, notes, price } = form.value;
    const editPizza: Pizza = {
      canBeEdit: this.pizzaEdit.canBeEdit,
      _id: this.pizzaEdit._id,
      _ownerId: this.pizzaEdit._ownerId,
      name: name,
      imageUrl: imageUrl,
      ingredients: ingredients,
      notes: notes,
      price: price,
      type: this.pizzaEdit.type,
      _createdOn: this.pizzaEdit._createdOn
    }
    this.apiService.editPizza(editPizza).subscribe({
      complete: () => this.router.navigate(['/clientsPizzas'])
    })
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Pizza } from 'src/app/types/pizza';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  newPizzaSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    const { name, imageUrl, ingredients, notes, price } = form.value;
    const newPizza: Pizza = {
      canBeEdit: true,
      name: name,
      imageUrl: imageUrl,
      ingredients: ingredients,
      notes: notes,
      price: price,
      type: 'client'
    }
    this.apiService.createPizza(newPizza).subscribe({
      complete: () => this.router.navigate(['/clientsPizzas'])
    })
  }
}

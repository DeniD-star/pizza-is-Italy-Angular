import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  form = this.fb.group({
    name: ["Margherita"],
    imageUrl: ['imageUrl'],
    ingredients: ['ingredients'],
    notes: ['notes'],
    price: ['']
  })
  constructor(private fb: FormBuilder){

  }
  editPizzaSubmitHandler(form: NgForm): void{
    if(form.invalid){
      return;
    }
    console.log(form.value);

}
}

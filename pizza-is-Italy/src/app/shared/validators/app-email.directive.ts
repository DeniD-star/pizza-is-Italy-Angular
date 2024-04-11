import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, ValidatorFn, NG_VALIDATORS } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppEmailDirective,
      multi: true
    }
  ]
})
export class AppEmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];

validator: ValidatorFn = () => null;

  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 4rez koeto imame dostup do ng changovete, i na vseki change 6te prilagame na6iqt valudator (koito 6te proverqva i validira)
    const currentEmailChanges = changes['appEmail'];

    if (currentEmailChanges) {
     this.validator= appEmailValidator(currentEmailChanges.currentValue)//tova vru6ta controla, koito e v app-email-validator
    }
  }
}

// This code is an Angular directive that implements a custom email validation functionality using a validator function.


//The directive imports necessary Angular modules and files:

// Directive, Input, OnChanges, SimpleChanges from '@angular/core': These are Angular core modules used for creating
//directives and handling changes in the directive.
// Validator, AbstractControl, ValidationErrors, ValidatorFn, NG_VALIDATORS from '@angular/forms': These are Angular
// forms modules used for creating custom validators.
// appEmailValidator from './app-email-validator': This is a custom validator function specific to email validation.
// The directive is defined using the @Directive decorator with the selector '[appEmail]'. It also provides itself as a
// validator for the NG_VALIDATORS token.

// The directive class AppEmailDirective implements the Validator and OnChanges interfaces.

// It defines an @Input property appEmail which is an array of strings.
// It initializes a validator function to null.
// It implements the validate method to apply the validator function to the control.
// It implements the ngOnChanges method to update the validator function when the appEmail input changes.
// In the ngOnChanges method, the directive retrieves the changes in the appEmail input and updates the validator function using
//the appEmailValidator function. This function returns a custom validator based on the current value of the appEmail input.

// Overall, this directive allows for custom email validation logic to be applied to a form control in an Angular application by
//providing a custom validator function based on the input provided.

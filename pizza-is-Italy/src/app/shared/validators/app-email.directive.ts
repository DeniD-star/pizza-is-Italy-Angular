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

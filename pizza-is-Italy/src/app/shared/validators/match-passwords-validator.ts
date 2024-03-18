import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  passControlOne: string,
  passControlTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const passControl1 = group.get(passControlOne);
    const passControl2 = group.get(passControlTwo);
    return passControl1?.value === passControl2?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}

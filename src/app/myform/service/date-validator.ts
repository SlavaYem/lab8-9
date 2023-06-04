import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorDateService } from '../validations/validator-service';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    let validator = new ValidatorDateService();
    let valid = !control.value || validator.validate_date(control.value);
    return valid ? null : { date: true };
  };
}

import { Injectable } from '@angular/core';
import { stringToDate } from './string-date';

@Injectable({
  providedIn: 'root',
})
export class ValidatorDayDateService {
  constructor() {}

  diff_years(dt1: Date, dt2: Date) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.round(diff / 365.25);
  }

  validate_diff_date(date1: string, date2: string) {
    let d1 = stringToDate(date1);
    let d2 = stringToDate(date2);
    if (this.diff_years(d1, d2) < 18) {
      return false;
    } else {
      return true;
    }
  }
}

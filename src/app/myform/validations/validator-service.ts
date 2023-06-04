import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorDateService {
  validate_date(value: string) {
    let arrD: string[] = [];
    arrD = value.split(/[.-/]/);
    let arrDate: number[] = [];
    arrD.forEach((el) => {
      arrDate.push(Number(el));
    });
    arrDate[1] -= 1;
    let d = new Date(arrDate[2], arrDate[1], arrDate[0]);
    if (
      d.getFullYear() == arrDate[2] &&
      d.getMonth() == arrDate[1] &&
      d.getDate() == arrDate[0] &&
      arrDate[2] > 1000
    ) {
      return true;
    } else {
      return false;
    }
  }
}

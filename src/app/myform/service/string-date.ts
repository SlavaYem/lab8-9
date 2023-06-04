export function stringToDate(value: string) {
    let arrD: string[] = [];
    arrD = value.split(/[.-/]/);
    let arrDate: number[] = [];
    arrD.forEach((el) => {
      arrDate.push(Number(el));
    });
  
    arrDate[1] -= 1;
  
    return new Date(arrDate[2], arrDate[1], arrDate[0]);
  }

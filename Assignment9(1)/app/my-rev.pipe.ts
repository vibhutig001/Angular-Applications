import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    let temp: string = value; // Assign the passed string to temp for reversal
    let rev: string = "";
    
    for (let i = temp.length - 1; i >= 0; i--) {
      rev = rev + temp[i];
    }
    
    return rev;
  }

}

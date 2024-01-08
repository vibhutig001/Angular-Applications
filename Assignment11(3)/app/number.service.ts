import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(No1:number):string
  {
    var iCnt:number=0;
    for(iCnt=2;iCnt*iCnt<=No1;iCnt++)
    {
      if((No1%iCnt)===0)
      {
        return "Number is Not Prime";
      }
    }
    return "Number is Prime";
  }
}

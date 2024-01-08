import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  constructor() { }

  ChkPrime(No1:number)
  {
    var No1:number;
    var iCnt:number;
 
    for(iCnt=2;iCnt<=(No1/2);iCnt++)
    {
      if((No1%iCnt)==0)
      {
        return "Number is NOT prime";
      }
    }
    return "Number is prime";
    
  }
}

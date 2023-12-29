import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, Param:string):string 
  {
    if(Param=="Prime")
    {
      var iCnt:number=0;
      for(iCnt=2;iCnt<=value;iCnt++)
      {
        if((value % iCnt)==0)
        {
          return "Number is prime Number";
        }

      }
      return "Number is Not Prime Number";
    }
    if(Param=="Perfect")
    {
      var iCnt:number=0;
      var iSum:number=0;
      for(iCnt=1;iCnt<value;iCnt++)
      {
        if((iCnt%value)==0)
        {
          iSum=iSum+iCnt;
        }
      }
      if(iSum==value)
      {
        return "Number is perfect Number"
      }
      return "Number is Not Perfect Number";
    }
    if(Param=="Even")
    {
      if((value%2)==0)
      {
        return "Number is Even Number";
      }
      return "Number is Not Even Number";
    }
    if(Param=="Odd")
    {
      if((value%2)!=0)
      {
        return "Number is Odd Number";
      }
      return "Number is Not Odd Number";
    }
    return "Invalid Parameter";
  }

}

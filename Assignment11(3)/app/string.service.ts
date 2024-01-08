import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  ChkCapital(sentance:string):number
  {
    var i:number=0;
    var Count:number=0;
    for(i=0;i<sentance.length;i++)
    {
      const char=sentance.charAt(i);
      if(char>='A' && char<='Z')
      {
        Count++;
      }
    }
    return Count;
  }
}

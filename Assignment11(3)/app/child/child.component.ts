import { Component } from '@angular/core';

import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]
})
export class ChildComponent 
{
  constructor(private obj1:NumberService,private obj2:StringService)
  {}
  Presult:number=22;
  Sent:string='';
  Prime()
  {
    this.Sent=this.obj1.ChkPrime(this.Presult);
  }

  Cresult:string='VIBhuTi';
  Count:number=0;
  Capital()
  {
    this.Count=this.obj2.ChkCapital(this.Cresult);
  }
}

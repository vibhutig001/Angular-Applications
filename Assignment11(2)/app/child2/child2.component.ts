import { Component } from '@angular/core';

import { StringService } from '../string.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers:[StringService]
})
export class Child2Component 
{
  constructor(private obj:StringService)
  {}
  Name:string="VIbHuti";
  Count:number=0;
  Capital()
  {
    this.Count=this.obj.ChkCapital(this.Name);
  }
}


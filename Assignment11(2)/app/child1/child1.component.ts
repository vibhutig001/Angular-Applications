import { Component } from '@angular/core';

import { NumberService } from '../number.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers:[NumberService]
})
export class Child1Component 
{
  constructor(private obj: NumberService)
  {}
  result : string='';
  Prime()
  {
    var No1:number=11;
    this.result=this.obj.ChkPrime(No1);
  }
}

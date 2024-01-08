import { Component } from '@angular/core';

import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmeticService]
})
export class DemoComponent 
{
  public Aresult:number=0;
  public Sresult:number=0;
  constructor(private obj : ArithmeticService)
  {
    
  }
  Addition()
    {
      var No1=11;
      var No2=21;

      this.Aresult=this.obj.Add(No1,No2);
    }
    Subtract()
    {
      var No1=11;
      var No2=21;

      this.Sresult=this.obj.Sub(No1,No2);
    }

}

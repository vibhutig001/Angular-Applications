import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  Name:string="";
  public fun()
  {
    this.Name= "MARVELLOUS INFOSYSTEM";
  }
  public gun()
  {
    this.Name= "marvellous infosystem";
  }
}

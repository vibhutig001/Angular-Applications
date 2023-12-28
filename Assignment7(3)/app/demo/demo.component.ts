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
  public Name:string="";
  public buttonclick=false;

  public fun()
  {
    this.buttonclick=!this.buttonclick;
    if(this.buttonclick)
    {
      this.Name="Educating for better tomarrow";
    }
    else
    {
      this.Name="Marvellous Infosystems";
    }
    
  }
}

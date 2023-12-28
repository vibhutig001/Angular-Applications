import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public Message:string ="";
  public MsgLength:number=0;

  public sentence(value:string)
  {
    this.Message=value;
    this.MsgLength=this.Message.length;
  }

}

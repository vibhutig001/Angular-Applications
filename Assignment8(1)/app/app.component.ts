import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  receivedText: string = '';

  receiveMessage(event: string) {
    this.receivedText = event;
  }
}

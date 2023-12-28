import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  @Output() public LaserLight = new EventEmitter();
  public SendMessage()
  {
    this.LaserLight.emit("Hello from Child");
  }
}

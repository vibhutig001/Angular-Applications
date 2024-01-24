import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {FormBuilder,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MatSelectModule,MatInputModule,MatFormFieldModule,BsDropdownModule,ButtonsModule,ReactiveFormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[FormBuilder,Validators]
})
export class DemoComponent 
{
  constructor(public fbobj: FormBuilder) 
  {}

  MarvellousForm = this.fbobj.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]], // Only letters allowed
    phone: ['',[Validators.required, Validators.pattern(/^[0-9]{10}$/),]], // Exactly 10 digits allowed 
    email:['',[Validators.required, Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)]],
    city:['',[Validators.required,Validators.minLength(5),Validators.maxLength(7)]],
    zip:['',[Validators.required,Validators.maxLength(7)]],
    comment:['',[Validators.required,Validators.maxLength(30)]],
    
  });
}

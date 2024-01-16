/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
//import { RouterLink } from '@angular/router';
//import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
//import { RouterLinkActive } from '@angular/router';
import { routes } from './app.routes';
//import { Router } from 'express';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Comp1Component, Comp2Component, MatTabsModule, RouterModule.forRoot(routes)],
  template: `
  <nav mat-tab-nav-bar [backgroundColor]="background" [tabPanel]="tabPanel">
    <a mat-tab-link (click)="navigateTo('/technology')" [active]="isActive('/technology')">Technology</a>
    <a mat-tab-link (click)="navigateTo('/books')" [active]="isActive('/books')">Books</a>
    <a mat-tab-link disabled>Disabled Link</a>
  </nav>
  <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
  <router-outlet></router-outlet>
`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  links = ['/technology', '/books'];  // Add more links as needed
  activeLink = this.links[0]; // Set the initial active link

  constructor(private router: Router) {}

  navigateTo(link: string): void {
    this.router.navigate([link]);
    this.activeLink = link;
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}*/
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Router } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [Comp1Component, Comp2Component, MatTabsModule, RouterModule],
  template: `
  <nav mat-tab-nav-bar [backgroundColor]="background" [tabPanel]="tabPanel">
    <a mat-tab-link (click)="navigateTo('/technology')" [active]="isActive('/technology')">Technology</a>
    <a mat-tab-link (click)="navigateTo('/books')" [active]="isActive('/books')">Books</a>
    <a mat-tab-link disabled>Disabled Link</a>
  </nav>
  <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
  <router-outlet></router-outlet>
`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = ['/technology', '/books'];
  activeLink = this.links[0];

  constructor(private router: Router) {}

  navigateTo(link: string): void {
    this.router.navigate([link]);
    this.activeLink = link;
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}


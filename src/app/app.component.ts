import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentManagerComponent } from '../document-manager/document-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DocumentManagerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}


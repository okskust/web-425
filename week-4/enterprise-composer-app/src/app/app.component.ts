/**
 * Title: app.components.ts
 * Author: Oksana Kustova
 * Date: 1/16/2022
 * Description: AppComponent.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 4.4 - Async Pipe';
}

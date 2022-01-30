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
  assignment: string = 'Exercise 4.3 – Handling Form Events with Observables';
}

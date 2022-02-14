/**
 * Title: app.components.ts
 * Author: Oksana Kustova
 * Date: 02/02/2022
 * Description: AppComponent.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Instructions – Exercise 6.2 – Output Properties";
  }
}

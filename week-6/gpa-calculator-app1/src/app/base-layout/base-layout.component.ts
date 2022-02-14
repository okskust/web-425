/**
 * Title: base-layout.components.ts
 * Author: Oksana Kustova
 * Date: 02/13/2022
 * Description: component.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {}
}

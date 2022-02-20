/**
 * Title: gpa.components.ts
 * Author: Oksana Kustova
 * Date: 02/13/2022
 * Description: component.
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {
  @Input()
  gpaTotal!: number;

  constructor() { }

  ngOnInit(): void {
  }

}

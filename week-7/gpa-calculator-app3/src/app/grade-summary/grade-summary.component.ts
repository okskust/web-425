/**
 * Title: grade-summary.components.ts
 * Author: Oksana Kustova
 * Date: 02/13/2022
 * Description: component.
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  @Input()
  grade!: string;
  @Input()
  course!: string;
  constructor() {}

  ngOnInit(): void {}
}

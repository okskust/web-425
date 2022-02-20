/**
 * Title: base-layout.components.ts
 * Author: Oksana Kustova
 * Date: 02/13/2022
 * Description: component.
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  ngOnInit(): void {}
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}

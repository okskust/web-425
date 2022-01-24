/**
 * Title: signin.components.ts
 * Author: Oksana Kustova
 * Date: 1/23/2022
 * Description: SigninComponent.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
isLoggedIn = false;
constructor(private router: Router) {
}

ngOnInit(): void {
}

singin() {
  this.isLoggedIn = true;

  this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
}
}

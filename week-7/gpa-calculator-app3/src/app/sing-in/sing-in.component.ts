/**
 * Title: sing-in.components.ts
 * Author: Oksana Kustova
 * Date: 02/20/2022
 * Description: component.
 */

 import { Component, OnInit } from '@angular/core';
 import { SingInService } from '../sing-in.service';
 import { Router } from '@angular/router';
 import { FormBuilder, FormGroup } from '@angular/forms';
 import { CookieService } from 'ngx-cookie-service';

 @Component({
   selector: 'app-sign-in',
   templateUrl: './sing-in.component.html',
   styleUrls: ['./sing-in.component.scss']
 })
 export class SingInComponent implements OnInit {

   signinForm!: FormGroup;
   errorMessage!: string;

   constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private singinService: SingInService) {
     console.log(this.cookieService.get('session_user'));
    }

   ngOnInit(): void {
     this.signinForm = this.fb.group({
       studentId: ''
     })
   }

   onSubmit() {
     const formValues = this.signinForm.value;
     const studentId = parseInt(formValues.studentId);

     if (this.singinService.validate(studentId)) {
       this.cookieService.set('session_user', studentId.toString(), 1)
       this.router.navigate(['/'])
     } else {
       this.errorMessage = `The student ID you entered is invalid, please try again.`;
     }
   }
 }

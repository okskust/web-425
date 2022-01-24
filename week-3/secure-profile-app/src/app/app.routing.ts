/**
 * Title: app.routing.ts
 * Author: Oksana Kustova
 * Date: 1/23/2022
 * Description: Routing for Secure Profile App.
 */

 import { SinginComponent } from './singin/singin.component';
 import { Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';

 export const AppRoutes: Routes = [
     {
         path: '',
         component: SinginComponent
     },
     {
       path: 'home',
       component: HomeComponent
     }
 ]



/**
 * Title: sing-in.service.ts
 * Author: Oksana Kustova
 * Date: 2/20/2022
 * Description: sing-in service.
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}

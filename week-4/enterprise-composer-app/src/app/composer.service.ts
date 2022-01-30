/**
 * Title: composer.service.ts
 * Author: Oksana Kustova
 * Date: 1/29/2022
 * Description: composer service.
 */


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Frederic Chopin',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Vladimir Cosma',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Clara Schumann',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Pyotr Ilyich Tchaikovsky',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Hans Zimmer',
        genre: 'Modern Orchestra',
      },
    ];
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}

/**
 * Title: composer-list.components.ts
 * Author: Oksana Kustova
 * Date: 1/16/2022
 * Description: ComposerListComponent.
 */
import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Frederic Chopin', 'Classical'),
      new Composer('Vladimir Cosma', 'Classical'),
      new Composer('Clara Schumann', 'Classical'),
      new Composer('Pyotr Ilyich Tchaikovsky', 'Classical'),
      new Composer('Hans Zimmer', 'Modern Orchestra'),
    ];
  }

  ngOnInit(): void {}
}

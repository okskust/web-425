/**
 * Title: composer-list.components.ts
 * Author: Oksana Kustova
 * Date: 1/16/2022
 * Description: ComposerListComponent.
 */
import { Component, OnInit } from '@angular/core';
import { IComposer} from "../composer.interface";
import { ComposerService } from "../composer.service";


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
      this.composers = this.composerService.getComposers();

  }

  ngOnInit(): void {}
}

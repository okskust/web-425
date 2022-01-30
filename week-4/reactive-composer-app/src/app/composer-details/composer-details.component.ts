/**
 * Title: composer-details.components.ts
 * Author: Oksana Kustova
 * Date: 1/23/2022
 * Description: ComposerDetailsComponent.
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private ComposerService: ComposerService) {
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId'),
      10
    );
    if (this.composerId) {
      this.composer = this.ComposerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tapet-item',
  templateUrl: './partials/tapet-item.html',
  styleUrls: ['../css/tapet-item.css'],
  inputs: ['tapet'],
  encapsulation: ViewEncapsulation.None
})

export class TapetItemComponent {}

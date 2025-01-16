import { Component, Input } from '@angular/core';

import { ConditionLines, IComputer } from '@paul80nd/relay-computer-model';
import { NgFor, NgIf } from '@angular/common';
import { RegisterViewComponent } from './components/register_view.component';
import { DecPipe } from './dec.pipe';
import { HexPipe } from './hex.pipe';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-state-view]',
    templateUrl: './state_view.component.svg',
    styleUrls: ['./state_view.component.css'],
    standalone: true,
    imports: [NgFor, NgIf, RegisterViewComponent, DecPipe, HexPipe]
})

export class StateViewComponent {

  cyLine = ConditionLines.CY;
  snLine = ConditionLines.SN;
  ezLine = ConditionLines.EZ;

  offset = 0;
  memoryDec = false;

  @Input() computer!: IComputer;

  shift(value: number) {
    return value << 8;
  }

  nextPage() {
    this.offset += 0x100;
  }
  prevPage() {
    this.offset -= 0x100;
  }

}

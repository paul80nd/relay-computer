import { Component, Input } from '@angular/core';

import { ConditionLines, IComputer } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-state-view]',
  templateUrl: './state_view.component.svg',
  styleUrls: ['./state_view.component.css']
})

export class StateViewComponent {

  cyLine = ConditionLines.CY;
  snLine = ConditionLines.SN;
  ezLine = ConditionLines.EZ;

  offset = 0;

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

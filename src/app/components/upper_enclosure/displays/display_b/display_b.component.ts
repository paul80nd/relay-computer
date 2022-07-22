import { Component, Input } from '@angular/core';

import { ClockLines, OperationLines } from '../../../../model/bus/bus_part_lines';
import { IDisplayBCard } from '../../../../model/cards/display_b.card';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-b]',
  templateUrl: './display_b.component.svg'
})
export class DisplayBComponent {

  setLine = OperationLines.ISET;
  mv8Line = OperationLines.IMV8;
  gtoLine = OperationLines.IGTO;

  clkLine = ClockLines.CLK;

  @Input()
  card!: IDisplayBCard;

}

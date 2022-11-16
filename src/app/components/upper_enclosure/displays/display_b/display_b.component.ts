import { Component, Input } from '@angular/core';

import { ClockLines, OperationLines, IDisplayBCard } from '@paul80nd/relay-computer-model';
import { ClockCtrlLines } from '@paul80nd/relay-computer-model/lib/src/bus/bus-part-lines';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-b]',
  templateUrl: './display_b.component.svg'
})
export class DisplayBComponent {

  setLine = OperationLines.ISET;
  mv8Line = OperationLines.IMV8;
  gtoLine = OperationLines.IGTO;
  mscLine = OperationLines.IMSC;

  clkLine = ClockLines.CLK;

  hltLine = ClockCtrlLines.HLT;

  @Input()
  card!: IDisplayBCard;

}

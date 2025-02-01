import { Component, input } from '@angular/core';
import { ClockLines, OperationLines, IDisplayBCard } from '@paul80nd/relay-computer-model';
import { ClockCtrlLines } from '@paul80nd/relay-computer-model/lib/src/bus/bus-part-lines';
import { DisplayBConditionComponent } from './display_b_condition.component';
import { DisplayBAluComponent } from './display_b_alu.component';
import { ByteLedLightBarComponent } from '../../../shared/leds/byte_llb/byte_llb.component';
import { DoubleByteLedLightBarComponent } from '../../../shared/leds/byte_llb/dbl_byte_llb.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-b]',
  templateUrl: './display_b.component.svg',
  imports: [DisplayBConditionComponent, DisplayBAluComponent, ByteLedLightBarComponent, DoubleByteLedLightBarComponent]
})
export class DisplayBComponent {

  setLine = OperationLines.ISET;
  mv8Line = OperationLines.IMV8;
  m16Line = OperationLines.IM16;
  gtoLine = OperationLines.IGTO;
  mscLine = OperationLines.IMSC;
  strLine = OperationLines.ISTR;

  clkLine = ClockLines.CLK;

  hltLine = ClockCtrlLines.HLT;

  readonly card = input.required<IDisplayBCard>();
}

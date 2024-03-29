import { Component, Input } from '@angular/core';

import {
  AluFunctionClLines, ClockLines,
  DataSwitchGateLines, I2BLines,
  MemoryLines, RegAuxLines, IDisplayACard
} from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-a]',
  templateUrl: './display_a.component.svg'
})
export class DisplayAComponent {

  clLine: number = AluFunctionClLines.CL;
  licLine: number = RegAuxLines.LIC;
  linLine: number = RegAuxLines.LIN;
  lpcLine: number = RegAuxLines.LPC;
  sicLine: number = RegAuxLines.SIC;
  spcLine: number = RegAuxLines.SPC;

  sdsLine: number = DataSwitchGateLines.SDS;
  sasLine: number = DataSwitchGateLines.SAS;

  clkLine: number = ClockLines.CLK;
  i2bLine: number = I2BLines.I2B;
  b2mLine: number = MemoryLines.B2M;
  merLine: number = MemoryLines.MER;
  mewLine: number = MemoryLines.MEW;

  @Input() card!: IDisplayACard;

}

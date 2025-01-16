import { Component, Input } from '@angular/core';

import {
  AluFunctionClLines, ClockLines,
  DataSwitchGateLines, I2BLines,
  MemoryLines, RegAuxLines, IDisplayACard
} from '@paul80nd/relay-computer-model';
import { DisplayAA1AComponent } from './display_a_a1a.component';
import { DisplayAA2AComponent } from './display_a_a2a.component';
import { TactileSwitchComponent } from '../../../shared/switches/tact_switch/tact_switch.component';
import { DisplayAA2BComponent } from './display_a_a2b.component';
import { DisplayAA2CComponent } from './display_a_a2c.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-a]',
    templateUrl: './display_a.component.svg',
    standalone: true,
    imports: [DisplayAA1AComponent, DisplayAA2AComponent, TactileSwitchComponent, DisplayAA2BComponent, DisplayAA2CComponent]
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

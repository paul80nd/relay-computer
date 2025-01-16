import { Component, input } from '@angular/core';

import { BitValue, CardPart, RegABCDLines } from '@paul80nd/relay-computer-model';
import { TactileSwitchComponent } from '../../../shared/switches/tact_switch/tact_switch.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-a-a1a]',
  templateUrl: 'display_a_a1a.component.svg',
  imports: [TactileSwitchComponent]
})
export class DisplayAA1AComponent {

  ldALine: number = RegABCDLines.RLA;
  ldBLine: number = RegABCDLines.RLB;
  ldCLine: number = RegABCDLines.RLC;
  ldDLine: number = RegABCDLines.RLD;
  selALine: number = RegABCDLines.RSA;
  selBLine: number = RegABCDLines.RSB;
  selCLine: number = RegABCDLines.RSC;
  selDLine: number = RegABCDLines.RSD;

  readonly part = input.required<CardPart>();
  readonly valueIn = input.required<BitValue>();

}

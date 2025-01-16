import { Component, input } from '@angular/core';

import { BitValue , CardPart, AluOperationLines } from '@paul80nd/relay-computer-model';
import { TactileSwitchComponent } from '../../../shared/switches/tact_switch/tact_switch.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-a-a2c]',
    templateUrl: 'display_a_a2c.component.svg',
    imports: [TactileSwitchComponent]
})
export class DisplayAA2CComponent {

  addLine: number = AluOperationLines.ADD;
  incLine: number = AluOperationLines.INC;
  shlLine: number = AluOperationLines.SHL;
  andLine: number = AluOperationLines.AND;
  orrLine: number = AluOperationLines.ORR;
  xorLine: number = AluOperationLines.XOR;
  notLine: number = AluOperationLines.NOT;

  readonly part = input.required<CardPart>();
  readonly valueIn = input.required<BitValue>();

}

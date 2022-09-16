import { Component, Input } from '@angular/core';

import { BitValue , CardPart, AluOperationLines } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-a-a2c]',
  templateUrl: 'display_a_a2c.component.svg'
})
export class DisplayAA2CComponent {

  addLine: number = AluOperationLines.ADD;
  incLine: number = AluOperationLines.INC;
  shlLine: number = AluOperationLines.SHL;
  andLine: number = AluOperationLines.AND;
  orrLine: number = AluOperationLines.ORR;
  xorLine: number = AluOperationLines.XOR;
  notLine: number = AluOperationLines.NOT;

  @Input() part!: CardPart;
  @Input() valueIn!: BitValue;

}

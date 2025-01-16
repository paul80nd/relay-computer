import { Component, Input } from '@angular/core';

import {
  AluFunctionClLines, AluOperationLines,
  ConditionLines, IAluControlCard
} from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-card-alu-ctrl]',
    templateUrl: './card_alu_ctrl.component.svg',
    standalone: true
})

export class CardAluControlComponent {

  cyLine = ConditionLines.CY;
  snLine = ConditionLines.SN;
  ezLine = ConditionLines.EZ;

  addLine: number = AluOperationLines.ADD;
  incLine: number = AluOperationLines.INC;
  shlLine: number = AluOperationLines.SHL;
  andLine: number = AluOperationLines.AND;
  orrLine: number = AluOperationLines.ORR;
  xorLine: number = AluOperationLines.XOR;
  notLine: number = AluOperationLines.NOT;
  clrLine: number = AluOperationLines.CLR;

  f2Line = AluFunctionClLines.F2;
  f1Line = AluFunctionClLines.F1;
  f0Line = AluFunctionClLines.F0;

  @Input() card!: IAluControlCard;
}

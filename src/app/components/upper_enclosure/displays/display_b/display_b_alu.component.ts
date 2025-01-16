import { Component, input } from '@angular/core';

import {
  AluFunctionClLines,
  AluOperationLines,
  BitValue
} from '@paul80nd/relay-computer-model';
import { AluOperationLedLightBarComponent } from '../../../shared/leds/alu_op_llb/alu_op_llb.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-b-alu]',
    templateUrl: 'display_b_alu.component.svg',
    imports: [AluOperationLedLightBarComponent]
})
export class DisplayBAluComponent {

  addLine: number = AluOperationLines.ADD;
  incLine: number = AluOperationLines.INC;
  shlLine: number = AluOperationLines.SHL;
  andLine: number = AluOperationLines.AND;
  orrLine: number = AluOperationLines.ORR;
  xorLine: number = AluOperationLines.XOR;
  notLine: number = AluOperationLines.NOT;

  clLine: number = AluFunctionClLines.CL;
  f2Line: number = AluFunctionClLines.F2;
  f1Line: number = AluFunctionClLines.F1;
  f0Line: number = AluFunctionClLines.F0;

  readonly alu = input.required<BitValue>();
  readonly aluFuncCl = input.required<BitValue>();

}

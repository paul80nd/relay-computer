import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import {
  AluFunctionClLines,
  AluOperationLines
} from '../../../../model/bus/bus_part_lines';

@Component({
  selector: '[rc-display-b-alu]',
  templateUrl: 'display_b_alu.component.svg'
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

  @Input() alu!: BitValue;
  @Input() aluFuncCl!: BitValue;

}

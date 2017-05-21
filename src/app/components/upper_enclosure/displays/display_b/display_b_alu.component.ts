import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import {
    AluOperationLines,
    AluFunctionClLines,
} from '../../../../model/bus/bus_part_lines';

@Component({
    selector: '[rc-display-b-alu]',
    templateUrl: 'display_b_alu.component.html',
})
export class DisplayBAluComponent {

    public addLine: number = AluOperationLines.ADD;
    public incLine: number = AluOperationLines.INC;
    public shlLine: number = AluOperationLines.SHL;
    public andLine: number = AluOperationLines.AND;
    public orrLine: number = AluOperationLines.ORR;
    public xorLine: number = AluOperationLines.XOR;
    public notLine: number = AluOperationLines.NOT;

    public clLine: number = AluFunctionClLines.CL;
    public f2Line: number = AluFunctionClLines.F2;
    public f1Line: number = AluFunctionClLines.F1;
    public f0Line: number = AluFunctionClLines.F0;

    @Input() public alu: BitValue;
    @Input() public aluFuncCl: BitValue;

}

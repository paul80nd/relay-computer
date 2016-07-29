import { Component, Input } from "@angular/core";

import { AluOperationLedLightBarComponent } from "../../leds/alu_op_llb.component";
import { BitValue } from "../../../model/bit_value";
import {
    AluOperationLines,
    AluFunctionClLines,
} from "../../../model/bus/bus_part_lines";

import { svgTemplate } from "./display_b_alu.svg";

@Component({
    directives: [AluOperationLedLightBarComponent],
    selector: "[rc-display-b-alu]",
    template: svgTemplate,
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

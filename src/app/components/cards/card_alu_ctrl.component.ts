import { Component, Input } from "@angular/core";

import { AluFunctionClLines, AluOperationLines,
    ConditionLines } from "../../model/bus/bus_part_lines";
import { IAluControlCard } from "../../model/cards/alu_control.card";

import { svgTemplate } from "./card_alu_ctrl.svg";

@Component({
    selector: "[rc-card-alu-ctrl]",
    template: svgTemplate,
})

export class CardAluControlComponent {

    public cyLine = ConditionLines.CY;
    public snLine = ConditionLines.SN;
    public ezLine = ConditionLines.EZ;

    public addLine: number = AluOperationLines.ADD;
    public incLine: number = AluOperationLines.INC;
    public shlLine: number = AluOperationLines.SHL;
    public andLine: number = AluOperationLines.AND;
    public orrLine: number = AluOperationLines.ORR;
    public xorLine: number = AluOperationLines.XOR;
    public notLine: number = AluOperationLines.NOT;
    public clrLine: number = AluOperationLines.CLR;

    public f2Line = AluFunctionClLines.F2;
    public f1Line = AluFunctionClLines.F1;
    public f0Line = AluFunctionClLines.F0;

    @Input() public card: IAluControlCard;
}

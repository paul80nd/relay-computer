import { Component, Input } from '@angular/core';

import {
    AluFunctionClLines, AluOperationLines,
    ConditionLines
} from '../../../../model/bus/bus_part_lines';
import { IAluControlCard } from '../../../../model/cards/alu_control.card';

@Component({
    selector: '[rc-card-alu-ctrl]',
    templateUrl: './card_alu_ctrl.component.html'
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

    @Input() card: IAluControlCard;
}

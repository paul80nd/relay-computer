import { Component, Input } from '@angular/core';

import { AluFunctionClLines, RegABCDLines, RegAuxLines } from '../../../../model/bus/bus_part_lines';
import { IControlCard } from '../../../../model/cards/control.card';

@Component({
    selector: '[rc-card-control-b]',
    templateUrl: './card_control_b.component.html'
})

export class CardControlBComponent {

    ldALine: number = RegABCDLines.RLA;
    ldBLine: number = RegABCDLines.RLB;
    ldCLine: number = RegABCDLines.RLC;
    ldDLine: number = RegABCDLines.RLD;
    selALine: number = RegABCDLines.RSA;
    selBLine: number = RegABCDLines.RSB;
    selCLine: number = RegABCDLines.RSC;
    selDLine: number = RegABCDLines.RSD;

    clLine: number = AluFunctionClLines.CL;

    licLine: number = RegAuxLines.LIC;
    linLine: number = RegAuxLines.LIN;
    lpcLine: number = RegAuxLines.LPC;
    sicLine: number = RegAuxLines.SIC;
    spcLine: number = RegAuxLines.SPC;

    @Input() card: IControlCard;

}

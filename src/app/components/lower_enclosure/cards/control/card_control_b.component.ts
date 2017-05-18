import { Component, Input } from "@angular/core";

import { AluFunctionClLines, RegABCDLines } from "../../../../model/bus/bus_part_lines";
import { IControlCard } from "../../../../model/cards/control.card";

import { svgTemplate } from "./card_control_b.svg";

@Component({
    selector: "[rc-card-control-b]",
    template: svgTemplate,
})

export class CardControlBComponent {

    public ldALine: number = RegABCDLines.RLA;
    public ldBLine: number = RegABCDLines.RLB;
    public ldCLine: number = RegABCDLines.RLC;
    public ldDLine: number = RegABCDLines.RLD;
    public selALine: number = RegABCDLines.RSA;
    public selBLine: number = RegABCDLines.RSB;
    public selCLine: number = RegABCDLines.RSC;
    public selDLine: number = RegABCDLines.RSD;

    public clLine: number = AluFunctionClLines.CL;

    @Input() public card: IControlCard;

}
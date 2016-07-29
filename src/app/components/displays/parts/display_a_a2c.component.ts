import { Component, Input } from "@angular/core";

import { BitValue } from "../../../model/bit_value";
import { AluOperationLines } from "../../../model/bus/bus_part_lines";
import { TactileSwitchComponent } from "../../switches/tact_switch.component";

import { svgTemplate } from "./display_a_a2c.svg";


@Component({
    directives: [TactileSwitchComponent],
    selector: "[rc-display-a-a2c]",
    template: svgTemplate,
})
export class DisplayAA2CComponent {

    public addLine: number = AluOperationLines.ADD;
    public incLine: number = AluOperationLines.INC;
    public shlLine: number = AluOperationLines.SHL;
    public andLine: number = AluOperationLines.AND;
    public orrLine: number = AluOperationLines.ORR;
    public xorLine: number = AluOperationLines.XOR;
    public notLine: number = AluOperationLines.NOT;

    @Input() public value: BitValue;
    @Input() public valueIn: BitValue;

}

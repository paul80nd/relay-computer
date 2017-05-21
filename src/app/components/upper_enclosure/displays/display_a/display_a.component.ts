import { Component, Input } from "@angular/core";

import {
    AluFunctionClLines, ClockLines,
    DataSwitchGateLines, I2BLines, RegAuxLines,
} from "../../../../model/bus/bus_part_lines";
import { IDisplayACard } from "../../../../model/cards/display_a.card";

@Component({
    selector: "[rc-display-a]",
    templateUrl: "./display_a.component.html",
})
export class DisplayAComponent {

    public clLine: number = AluFunctionClLines.CL;
    public linLine: number = RegAuxLines.LIN;
    public lpcLine: number = RegAuxLines.LPC;
    public spcLine: number = RegAuxLines.SPC;

    public sdsLine: number = DataSwitchGateLines.SDS;
    public sasLine: number = DataSwitchGateLines.SAS;

    public clkLine: number = ClockLines.CLK;

    public i2bLine: number = I2BLines.I2B;

    @Input() public card: IDisplayACard;

}

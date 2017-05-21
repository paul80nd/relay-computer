import { Component, Input } from "@angular/core";

import { ClockLines, OperationLines } from "../../../../model/bus/bus_part_lines";
import { IDisplayBCard } from "../../../../model/cards/display_b.card";

@Component({
    selector: "[rc-display-b]",
    templateUrl: "./display_b.component.html",
})
export class DisplayBComponent {

    public setLine = OperationLines.ISET;
    public mv8Line = OperationLines.IMV8;

    public clkLine = ClockLines.CLK;

    @Input()
    public card: IDisplayBCard;

}

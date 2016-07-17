import { Component, Input } from "@angular/core";
import { IControlCard } from "../../model/cards/control.card";
import { AbortLines, I2BLines } from "../../model/bus/bus_part_lines";

import { svgTemplate } from "./card_control_a.svg";

@Component({
    selector: "[card-control-a]",
    template: svgTemplate,
})

export class CardControlAComponent {

    public at08Line = AbortLines.AT08;

    public i2bLine = I2BLines.I2B;

    @Input()
    public card: IControlCard;

}

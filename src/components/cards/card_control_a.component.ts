import { Component, Input } from "@angular/core";
import { IControlCard } from "../../model/cards/control.card";
import { AbortLines } from "../../model/bus/bus_part_lines";

import { svgTemplate } from "./card_control_a.svg";

@Component({
    selector: "[card-control-a]",
    template: svgTemplate,
})

export class CardControlAComponent {

    public at08Line = AbortLines.AT08;

    @Input()
    public card: IControlCard;

}

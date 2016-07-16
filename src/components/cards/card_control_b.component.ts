import { Component, Input } from "@angular/core";
import { IControlCard } from "../../model/cards/control.card";

import { svgTemplate } from "./card_control_b.svg";

@Component({
    selector: "[card-control-b]",
    template: svgTemplate,
})

export class CardControlBComponent {

    @Input()
    public card: IControlCard;

}

import { Component, Input } from "@angular/core";

import { IAluLogicCard } from "../../model/cards/alu_logic.card";
import { ByteStackedLedsComponent } from "../leds/byte_stacked_leds.component";

import { svgTemplate } from "./card_alu_logic.svg";

@Component({
    directives: [ByteStackedLedsComponent],
    selector: "[rc-card-alu-logic]",
    template: svgTemplate,
})

export class CardAluLogicComponent {

    @Input()
    public card: IAluLogicCard;

}

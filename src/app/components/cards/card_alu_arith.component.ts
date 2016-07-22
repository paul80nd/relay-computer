import { Component, Input } from "@angular/core";
import { IAluArithmeticCard } from "../../model/cards/alu_arithmetic.card";

import { ByteLedsComponent } from "../leds/byte_leds.component";

import { svgTemplate } from "./card_alu_arith.svg";

@Component({
    directives: [ByteLedsComponent],
    selector: "[card-alu-arith]",
    template: svgTemplate,
})

export class CardAluArithmeticComponent {

    @Input()
    public card: IAluArithmeticCard;

}

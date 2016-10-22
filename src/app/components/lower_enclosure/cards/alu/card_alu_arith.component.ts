import { Component, Input } from "@angular/core";

import { IAluArithmeticCard } from "../../../../model/cards/alu_arithmetic.card";

import { svgTemplate } from "./card_alu_arith.svg";

@Component({
    selector: "[rc-card-alu-arith]",
    template: svgTemplate,
})

export class CardAluArithmeticComponent {

    @Input() public card: IAluArithmeticCard;

}

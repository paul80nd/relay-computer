import { Component, Input } from "@angular/core";

import { IRegisterBCCard } from "../../../../model/cards/register_bc.card";

import { svgTemplate } from "./card_register_bc.svg";

@Component({
    selector: "[rc-card-register-bc]",
    template: svgTemplate,
})

export class CardRegisterBCComponent {

    @Input() public card: IRegisterBCCard;

}

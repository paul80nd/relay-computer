import { Component, Input } from "@angular/core";

import { IRegisterICard } from "../../../../model/cards/register_i.card";

import { svgTemplate } from "./card_register_i.svg";

@Component({
    selector: "[rc-card-register-i]",
    template: svgTemplate,
})

export class CardRegisterIComponent {

    @Input() public card: IRegisterICard;

}

import { Component, Input } from "@angular/core";

import { IRegisterPCCard } from "../../../../model/cards/register_pc.card";

import { svgTemplate } from "./card_register_pc.svg";

@Component({
    selector: "[rc-card-register-pc]",
    template: svgTemplate,
})

export class CardRegisterPCComponent {

    @Input() public card: IRegisterPCCard;

}

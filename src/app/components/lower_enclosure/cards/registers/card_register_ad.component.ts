import { Component, Input } from "@angular/core";

import { IRegisterADCard } from "../../../../model/cards/register_ad.card";

import { svgTemplate } from "./card_register_ad.svg";

@Component({
    selector: "[rc-card-register-ad]",
    template: svgTemplate,
})

export class CardRegisterADComponent {

    @Input() public card: IRegisterADCard;

}

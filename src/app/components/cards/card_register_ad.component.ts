import { Component, Input } from "@angular/core";

import { IRegisterADCard } from "../../model/cards/register_ad.card";
import { RegisterLedsComponent } from "../leds/register_leds.component";

import { svgTemplate } from "./card_register_ad.svg";

@Component({
    directives: [
        RegisterLedsComponent],
    selector: "[rc-card-register-ad]",
    template: svgTemplate,
})

export class CardRegisterADComponent {

    @Input() public card: IRegisterADCard;

}

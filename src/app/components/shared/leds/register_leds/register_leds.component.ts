import { Component, Input } from "@angular/core";

import { ByteLedsComponent } from "./../byte_leds/byte_leds.component";
import { IRegisterCardPart } from "../../../../model/cards/parts/register.cardpart";

import { svgTemplate } from "./register_leds.svg";

@Component({
    providers: [ByteLedsComponent],
    selector: "[rc-register-leds]",
    template: svgTemplate,
})

export class RegisterLedsComponent {

    @Input() public register: IRegisterCardPart;
    @Input() public description: string;
}

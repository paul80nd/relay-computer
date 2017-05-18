import { Component, Input } from "@angular/core";

import { ByteLedsComponent } from "./../byte_leds/byte_leds.component";
import { IRegisterCardPart } from "../../../../model/cards/parts/register.cardpart";

import { svgTemplate } from "./register_16_leds.svg";

@Component({
    providers: [ByteLedsComponent],
    selector: "[rc-register-16-leds]",
    template: svgTemplate,
})

export class Register16LedsComponent {

    @Input() public register: IRegisterCardPart;
    @Input() public description: string;
}

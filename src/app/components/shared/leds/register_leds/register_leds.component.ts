import { Component, Input } from "@angular/core";

import { ByteLedsComponent } from "./../byte_leds/byte_leds.component";
import { IRegisterCardPart } from "../../../../model/cards/parts/register.cardpart";

@Component({
    providers: [ByteLedsComponent],
    selector: "[rc-register-leds]",
    templateUrl: "register_leds.component.html",
})

export class RegisterLedsComponent {

    @Input() public register: IRegisterCardPart;
    @Input() public description: string;
}

import { Component, Input } from "@angular/core";
import { ByteLedsComponent } from "./byte_leds.component";
import { svgTemplate } from "./register_leds.svg";
import { IRegisterCardPart } from "../../model/cards/parts/register.cardpart";

@Component({
    directives: [ByteLedsComponent],
    selector: "[register-leds]",
    template: svgTemplate,
})

export class RegisterLedsComponent {

    @Input()
    public register: IRegisterCardPart;

    @Input()
    public description: string;
}

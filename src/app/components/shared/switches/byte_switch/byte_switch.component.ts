import { Component, Input } from "@angular/core";

import { CardPart } from "../../../../model/cards/card_part";

import { svgTemplate } from "./byte_switch.svg";

@Component({
    selector: "[rc-byte-switch]",
    template: svgTemplate,
})

export class ByteSwitchComponent {

    @Input() public part: CardPart;

    public flipBit(position: number) {
        this.part.value = this.part.value.flipBit(position);
    }

}

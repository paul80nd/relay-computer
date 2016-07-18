import { Component, Input } from "@angular/core";
import { CardPart } from "../../model/cards/card_part";
import { svgTemplate } from "./byte_switch.svg";

@Component({
    selector: "[byte-switch]",
    template: svgTemplate,
})

export class ByteSwitchComponent  {

    @Input()
    public value: CardPart;

    public flipBit(position: number) {
        this.value.value = this.value.value.flipBit(position);
    }

}

import { Component, Input } from "@angular/core";
import { CardPart } from "../../model/cards/card_part";
import { BitValue } from "../../model/bit_value";
import { svgTemplate } from "./tact_switch.svg";

@Component({
    selector: "[tact-switch]",
    template: svgTemplate,
})

export class TactileSwitchComponent  {

    @Input()
    public value: CardPart;

    @Input()
    public valueIn: BitValue;

    @Input()
    public description: [string, string];

    @Input()
    public color: string;

    @Input()
    public bitTarget: number;

    public flipBit() {
        this.value.value = this.value.value.flipBit(this.bitTarget);
    }

}

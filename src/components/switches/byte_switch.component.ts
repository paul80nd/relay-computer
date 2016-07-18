import { Component, Input } from "@angular/core";
import { Value } from "../../model/value";
import { svgTemplate } from "./byte_switch.svg";

@Component({
    selector: "[byte-switch]",
    template: svgTemplate,
})

export class ByteSwitchComponent  {

    @Input()
    public value: Value;

    public flipBit(position: number) {
        this.value.value = this.value.value.flipBit(position);
    }

}

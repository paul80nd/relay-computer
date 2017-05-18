import { Component, Input } from "@angular/core";

import { BitValue } from "../../../../model/bit_value";

import { svgTemplate } from "./dbl_byte_leds.svg";

@Component({
    selector: "[rc-dbl-byte-leds]",
    template: svgTemplate,
})

export class DoubleByteLedsComponent {

    @Input() public value: BitValue;

}

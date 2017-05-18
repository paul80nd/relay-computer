import { Component, Input } from "@angular/core";

import { BitValue } from "../../../../model/bit_value";

import { svgTemplate } from "./dbl_byte_llb.svg";

@Component({
    selector: "[rc-dbl-byte-llb]",
    template: svgTemplate,
})

export class DoubleByteLedLightBarComponent {

    @Input() public value: BitValue;

}

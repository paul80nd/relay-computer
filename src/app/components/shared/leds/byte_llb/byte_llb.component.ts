import { Component, Input } from "@angular/core";

import { BitValue } from "../../../../model/bit_value";

import { svgTemplate } from "./byte_llb.svg";

@Component({
    selector: "[rc-byte-llb]",
    template: svgTemplate,
})

export class ByteLedLightBarComponent {

    @Input() public value: BitValue;

}

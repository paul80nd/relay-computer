import { Component, Input } from "@angular/core";

import { BitValue } from "../../../../model/bit_value";

@Component({
    selector: "[rc-byte-stacked-leds]",
    templateUrl: "byte_stacked_leds.component.html",
})

export class ByteStackedLedsComponent {

    @Input() public value: BitValue;

}

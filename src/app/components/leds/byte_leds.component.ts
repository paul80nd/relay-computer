import { Component, Input } from "@angular/core";
import { BitValue } from "../../model/bit_value";
import { svgTemplate } from "./byte_leds.svg";

@Component({
  selector: "[rc-byte-leds]",
  template: svgTemplate,
})

export class ByteLedsComponent {

  @Input()
  public value: BitValue;

}

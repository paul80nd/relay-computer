import { Component, Input } from "@angular/core";
import { BitValue } from "../../model/bit_value";
import { svgTemplate } from "./byte_stacked_leds.svg";

@Component({
  selector: "[byte-stacked-leds]",
  template: svgTemplate,
})

export class ByteStackedLedsComponent {

  @Input()
  public value: BitValue;

}

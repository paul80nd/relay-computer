import { BitValue } from "../../../model/bit_value";
import { Component, Input } from "@angular/core";
import { RegABCDLines } from "../../../model/bus/bus_part_lines";

import { svgTemplate } from "./display_a_a1a.svg";

import { TactileSwitchComponent } from "../../switches/tact_switch.component";

@Component({
  directives: [TactileSwitchComponent],
  selector: "[display-a-a1a]",
  template: svgTemplate,
})
export class DisplayAA1AComponent {

  public ldALine: number = RegABCDLines.RLA;
  public ldBLine: number = RegABCDLines.RLB;
  public ldCLine: number = RegABCDLines.RLC;
  public ldDLine: number = RegABCDLines.RLD;
  public selALine: number = RegABCDLines.RSA;
  public selBLine: number = RegABCDLines.RSB;
  public selCLine: number = RegABCDLines.RSC;
  public selDLine: number = RegABCDLines.RSD;

  @Input()
  public value: BitValue;

}

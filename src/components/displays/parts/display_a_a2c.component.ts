import { BitValue } from "../../../model/bit_value";
import { Component, Input } from "@angular/core";
import { AluOperationLines } from "../../../model/bus/bus_part_lines";

import { svgTemplate } from "./display_a_a2c.svg";

import { TactileSwitchComponent } from "../../switches/tact_switch.component";

@Component({
  directives: [TactileSwitchComponent],
  selector: "[display-a-a2c]",
  template: svgTemplate,
})
export class DisplayAA2CComponent {

  public addLine: number = AluOperationLines.ADD;
  public incLine: number = AluOperationLines.INC;
  public shlLine: number = AluOperationLines.SHL;
  public andLine: number = AluOperationLines.AND;
  public orrLine: number = AluOperationLines.ORR;
  public xorLine: number = AluOperationLines.XOR;
  public notLine: number = AluOperationLines.NOT;

  @Input()
  public value: BitValue;

}

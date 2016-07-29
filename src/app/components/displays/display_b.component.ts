import { Component, Input } from "@angular/core";

import { ClockLines, OperationLines } from "../../model/bus/bus_part_lines";
import { IDisplayBCard } from "../../model/cards/display_b.card";
import { ByteLedLightBarComponent } from "./../leds/byte_llb.component";
import { DisplayBAluComponent } from "./parts/display_b_alu.component";
import { DisplayBConditionComponent } from "./parts/display_b_condition.component";

@Component({
  directives: [
    ByteLedLightBarComponent,
    DisplayBAluComponent,
    DisplayBConditionComponent],
  selector: "[rc-display-b]",
  templateUrl: "svg/display_b.component.svg",
})
export class DisplayBComponent {

  public setLine = OperationLines.ISET;
  public mv8Line = OperationLines.IMV8;

  public clkLine = ClockLines.CLK;

  @Input()
  public card: IDisplayBCard;

}

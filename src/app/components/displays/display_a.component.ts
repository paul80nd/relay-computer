import { Component, Input } from "@angular/core";

import { AluFunctionClLines, ClockLines,
  DataSwitchGateLines, I2BLines, RegAuxLines } from "../../model/bus/bus_part_lines";
import { IDisplayACard } from "../../model/cards/display_a.card";
import { DisplayAA1AComponent } from "./parts/display_a_a1a.component";
import { DisplayAA2CComponent } from "./parts/display_a_a2c.component";
import { TactileSwitchComponent } from "../switches/tact_switch.component";

@Component({
  directives: [DisplayAA1AComponent, DisplayAA2CComponent,
    TactileSwitchComponent],
  selector: "[rc-display-a]",
  templateUrl: "svg/display_a.component.svg",
})
export class DisplayAComponent {

  public clLine: number = AluFunctionClLines.CL;
  public linLine: number = RegAuxLines.LIN;

  public sdsLine: number = DataSwitchGateLines.SDS;

  public clkLine: number = ClockLines.CLK;

  public i2bLine: number = I2BLines.I2B;

  @Input() public card: IDisplayACard;

}

import { Component, Input } from "@angular/core";
import { IDisplayACard } from "../../model/cards/display_a.card";
import { AluFunctionClLines, ClockLines,
  DataSwitchGateLines, RegAuxLines } from "../../model/bus/bus_part_lines";

import { TactileSwitchComponent } from "../switches/tact_switch.component";
import { DisplayAA1AComponent } from "./parts/display_a_a1a.component";
import { DisplayAA2CComponent } from "./parts/display_a_a2c.component";

@Component({
  directives: [DisplayAA1AComponent, DisplayAA2CComponent,
    TactileSwitchComponent],
  selector: "[display-a]",
  templateUrl: "svg/display_a.component.svg",
})
export class DisplayAComponent {

  public clLine: number = AluFunctionClLines.CL;
  public linLine: number = RegAuxLines.LIN;

  public sdsLine: number = DataSwitchGateLines.SDS;

  public clkLine: number = ClockLines.CLK;

  @Input()
  public card: IDisplayACard;

}

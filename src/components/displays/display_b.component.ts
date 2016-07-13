import { Component, Input } from "@angular/core";
import { IDisplayBCard } from "../../model/cards/display_b.card";
import { AluFunctionClLines, AluOperationLines } from "../../model/bus/bus_part_lines";

import { ByteLedLightBarComponent } from "./../leds/byte_llb.component";
import { AluOperationLedLightBarComponent } from "./../leds/alu_op_llb.component";
import { DisplayBConditionComponent } from "./parts/display_b_condition.component";

@Component({
  directives: [
    ByteLedLightBarComponent,
    AluOperationLedLightBarComponent,
    DisplayBConditionComponent],
  selector: "[display-b]",
  templateUrl: "svg/display_b.component.svg",
})
export class DisplayBComponent {

  public addLine: number = AluOperationLines.ADD;
  public incLine: number = AluOperationLines.INC;
  public shlLine: number = AluOperationLines.SHL;
  public andLine: number = AluOperationLines.AND;
  public orrLine: number = AluOperationLines.ORR;
  public xorLine: number = AluOperationLines.XOR;
  public notLine: number = AluOperationLines.NOT;

  public clLine: number = AluFunctionClLines.CL;

  @Input()
  public card: IDisplayBCard;

}

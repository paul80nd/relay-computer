import { Component, Input } from "@angular/core";

import { AluFunctionClLines, AluOperationLines,
  ClockLines, OperationLines } from "../../model/bus/bus_part_lines";
import { IDisplayBCard } from "../../model/cards/display_b.card";
import { AluOperationLedLightBarComponent } from "./../leds/alu_op_llb.component";
import { ByteLedLightBarComponent } from "./../leds/byte_llb.component";
import { DisplayBConditionComponent } from "./parts/display_b_condition.component";

@Component({
  directives: [
    ByteLedLightBarComponent,
    AluOperationLedLightBarComponent,
    DisplayBConditionComponent],
  selector: "[rc-display-b]",
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
  public f2Line: number = AluFunctionClLines.F2;
  public f1Line: number = AluFunctionClLines.F1;
  public f0Line: number = AluFunctionClLines.F0;

  public setLine = OperationLines.ISET;
  public mv8Line = OperationLines.IMV8;

  public clkLine = ClockLines.CLK;

  @Input()
  public card: IDisplayBCard;

}

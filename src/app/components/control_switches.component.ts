import { Component, Input } from "@angular/core";
import { IControlSwitchesCard } from "../model/cards/control_switches.card";

import { ByteSwitchComponent } from "./switches/byte_switch.component";

@Component({
  directives: [
    ByteSwitchComponent,
  ],
  selector: "[control-switches]",
  templateUrl: "svg/control_switches.component.svg",
})

export class ControlSwitchesComponent {

  @Input()
  public card: IControlSwitchesCard;

  public deposit: boolean;
  public depositNext: boolean;

  public changeDeposit(up: boolean): void {
    if (!this.deposit && !this.depositNext) {
      if (up) {
        this.deposit = false;
        this.depositNext = true;
        this.card.hackLoadInstOn();
      } else {
        this.deposit = true;
        this.depositNext = false;
      }
      setTimeout(() => {
        if (this.depositNext) { this.card.hackLoadInstOff(); }
        this.deposit = false;
        this.depositNext = false;
       }, 500);
    }
  }

}

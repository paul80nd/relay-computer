import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';

import { IControlSwitchesCard } from '@paul80nd/relay-computer-model';
import { ByteSwitchComponent } from '../../shared/switches/byte_switch/byte_switch.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-control-switches]',
  templateUrl: './control_switches.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ByteSwitchComponent]
})
export class ControlSwitchesComponent {

  readonly card = input.required<IControlSwitchesCard>();

  // Transient switch-position state. Signals so the delayed reset below marks
  // the view for change detection on its own, rather than relying on the global
  // render loop to notice the mutation.
  readonly deposit = signal(false);
  readonly depositNext = signal(false);
  readonly examine = signal(false);
  readonly examineNext = signal(false);
  readonly loadAddr = signal(false);

  changeDeposit(up: boolean): void {
    if (!this.deposit() && !this.depositNext()) {
      if (up) {
        this.deposit.set(false);
        this.depositNext.set(true);
        this.card().depositNext();
      } else {
        this.deposit.set(true);
        this.depositNext.set(false);
        this.card().deposit();
      }
      setTimeout(() => {
        this.deposit.set(false);
        this.depositNext.set(false);
      }, 500);
    }
  }

  changeExamine(up: boolean): void {
    if (!this.examine() && !this.examineNext()) {
      if (up) {
        this.examine.set(false);
        this.examineNext.set(true);
        this.card().examineNext();
      } else {
        this.examine.set(true);
        this.examineNext.set(false);
        this.card().examine();
      }
      setTimeout(() => {
        this.examine.set(false);
        this.examineNext.set(false);
      }, 500);
    }
  }

  changeLoadAddr(): void {
    if (!this.loadAddr()) {
      this.loadAddr.set(true);
      this.card().loadAddr();
      setTimeout(() => {
        this.loadAddr.set(false);
      }, 500);
    }
  }
}

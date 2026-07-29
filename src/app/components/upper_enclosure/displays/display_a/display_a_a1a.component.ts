import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { BitValue, CardOutput, RegABCDLines } from '@paul80nd/relay-computer-model';
import { TactileSwitchComponent } from '../../../shared/switches/tact_switch/tact_switch.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-a-a1a]',
  templateUrl: 'display_a_a1a.component.svg',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TactileSwitchComponent]
})
export class DisplayAA1AComponent {

  protected readonly RegABCDLines = RegABCDLines;

  readonly part = input.required<CardOutput>();
  readonly valueIn = input.required<BitValue>();

}

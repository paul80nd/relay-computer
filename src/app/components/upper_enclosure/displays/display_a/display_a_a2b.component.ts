import { Component, input, ChangeDetectionStrategy } from '@angular/core';

import { BitValue, CardOutput, RegJMXYLines } from '@paul80nd/relay-computer-model';
import { TactileSwitchComponent } from '../../../shared/switches/tact_switch/tact_switch.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-a-a2b]',
    templateUrl: 'display_a_a2b.component.svg',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TactileSwitchComponent]
})
export class DisplayAA2BComponent {

  protected readonly RegJMXYLines = RegJMXYLines;

  readonly part = input.required<CardOutput>();
  readonly valueIn = input.required<BitValue>();

}

import { Component, input } from '@angular/core';

import { BitValue, CardPart, RegJMXYLines } from '@paul80nd/relay-computer-model';
import { TactileSwitchComponent } from '../../../shared/switches/tact_switch/tact_switch.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-a-a2b]',
    templateUrl: 'display_a_a2b.component.svg',
    imports: [TactileSwitchComponent]
})
export class DisplayAA2BComponent {

  ldXLine: number = RegJMXYLines.LDX;
  ldYLine: number = RegJMXYLines.LDY;
  ldXYLine: number = RegJMXYLines.LXY;
  selXLine: number = RegJMXYLines.SEX;
  selYLine: number = RegJMXYLines.SEY;
  selXYLine: number = RegJMXYLines.SXY;

  readonly part = input.required<CardPart>();
  readonly valueIn = input.required<BitValue>();

}

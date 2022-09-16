import { Component, Input } from '@angular/core';

import { BitValue, CardPart, RegJMXYLines } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-display-a-a2b]',
  templateUrl: 'display_a_a2b.component.svg'
})
export class DisplayAA2BComponent {

  ldXLine: number = RegJMXYLines.LDX;
  ldYLine: number = RegJMXYLines.LDY;
  ldXYLine: number = RegJMXYLines.LXY;
  selXLine: number = RegJMXYLines.SEX;
  selYLine: number = RegJMXYLines.SEY;
  selXYLine: number = RegJMXYLines.SXY;

  @Input() part!: CardPart;
  @Input() valueIn!: BitValue;

}

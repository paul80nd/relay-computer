import { Component, Input } from '@angular/core';

import { BitValue, CardPart, RegJMXYLines } from '@paul80nd/relay-computer-model';
import { TactileSwitchComponent } from '../../../shared/switches/tact_switch/tact_switch.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-display-a-a2a]',
    templateUrl: 'display_a_a2a.component.svg',
    standalone: true,
    imports: [TactileSwitchComponent]
})
export class DisplayAA2AComponent {

  ldM1Line: number = RegJMXYLines.LM1;
  ldM2Line: number = RegJMXYLines.LM2;
  ldJ1Line: number = RegJMXYLines.LJ1;
  ldJ2Line: number = RegJMXYLines.LJ2;
  selM1Line: number = RegJMXYLines.SM1;
  selM2Line: number = RegJMXYLines.SM2;
  selMLine: number = RegJMXYLines.SEM;
  selJLine: number = RegJMXYLines.SEJ;

  @Input() part!: CardPart;
  @Input() valueIn!: BitValue;

}

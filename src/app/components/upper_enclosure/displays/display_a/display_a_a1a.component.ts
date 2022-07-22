import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import { RegABCDLines } from '../../../../model/bus/bus_part_lines';

@Component({
  selector: '[rc-display-a-a1a]',
  templateUrl: 'display_a_a1a.component.svg'
})
export class DisplayAA1AComponent {

  ldALine: number = RegABCDLines.RLA;
  ldBLine: number = RegABCDLines.RLB;
  ldCLine: number = RegABCDLines.RLC;
  ldDLine: number = RegABCDLines.RLD;
  selALine: number = RegABCDLines.RSA;
  selBLine: number = RegABCDLines.RSB;
  selCLine: number = RegABCDLines.RSC;
  selDLine: number = RegABCDLines.RSD;

  @Input() value: BitValue | undefined;
  @Input() valueIn: BitValue | undefined;

}

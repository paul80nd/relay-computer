import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import { RegJMXYLines } from '../../../../model/bus/bus_part_lines';

@Component({
    selector: '[rc-display-a-a2a]',
    templateUrl: 'display_a_a2a.component.svg'
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

    @Input() value: BitValue;
    @Input() valueIn: BitValue;

}

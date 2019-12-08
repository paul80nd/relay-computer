import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import { RegJMXYLines } from '../../../../model/bus/bus_part_lines';

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

    @Input() value: BitValue;
    @Input() valueIn: BitValue;

}

import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import { RegABCDLines } from '../../../../model/bus/bus_part_lines';

@Component({
    selector: '[rc-display-a-a1a]',
    templateUrl: 'display_a_a1a.component.html',
})
export class DisplayAA1AComponent {

    public ldALine: number = RegABCDLines.RLA;
    public ldBLine: number = RegABCDLines.RLB;
    public ldCLine: number = RegABCDLines.RLC;
    public ldDLine: number = RegABCDLines.RLD;
    public selALine: number = RegABCDLines.RSA;
    public selBLine: number = RegABCDLines.RSB;
    public selCLine: number = RegABCDLines.RSC;
    public selDLine: number = RegABCDLines.RSD;

    @Input() public value: BitValue;
    @Input() public valueIn: BitValue;

}

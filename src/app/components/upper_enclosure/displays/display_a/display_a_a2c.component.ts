import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import { AluOperationLines } from '../../../../model/bus/bus_part_lines';

@Component({
    selector: '[rc-display-a-a2c]',
    templateUrl: 'display_a_a2c.component.html'
})
export class DisplayAA2CComponent {

    addLine: number = AluOperationLines.ADD;
    incLine: number = AluOperationLines.INC;
    shlLine: number = AluOperationLines.SHL;
    andLine: number = AluOperationLines.AND;
    orrLine: number = AluOperationLines.ORR;
    xorLine: number = AluOperationLines.XOR;
    notLine: number = AluOperationLines.NOT;

    @Input() value: BitValue;
    @Input() valueIn: BitValue;

}

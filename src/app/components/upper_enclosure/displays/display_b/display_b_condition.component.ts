import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';
import { ConditionLines } from '../../../../model/bus/bus_part_lines';

@Component({
    selector: '[rc-display-b-condition]',
    templateUrl: 'display_b_condition.component.html'
})
export class DisplayBConditionComponent {

    cyLine = ConditionLines.CY;
    snLine = ConditionLines.SN;
    ezLine = ConditionLines.EZ;

    @Input() value: BitValue;

}

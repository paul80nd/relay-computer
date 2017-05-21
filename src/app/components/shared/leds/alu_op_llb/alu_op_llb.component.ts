import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

@Component({
    selector: '[rc-alu-op-llb]',
    templateUrl: 'alu_op_llb.component.html',
})

export class AluOperationLedLightBarComponent {

    @Input() public value: BitValue;
    @Input() public description: string;
    @Input() public color: string;
    @Input() public bitTarget: number;

}

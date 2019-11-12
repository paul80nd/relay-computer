import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

@Component({
    selector: '[rc-alu-op-llb]',
    templateUrl: 'alu_op_llb.component.html'
})

export class AluOperationLedLightBarComponent {

    @Input() value: BitValue;
    @Input() description: string;
    @Input() color: string;
    @Input() bitTarget: number;

}

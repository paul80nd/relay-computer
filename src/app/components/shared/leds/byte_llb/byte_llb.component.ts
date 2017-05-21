import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

@Component({
    selector: '[rc-byte-llb]',
    templateUrl: 'byte_llb.component.html',
})

export class ByteLedLightBarComponent {

    @Input() public value: BitValue;

}

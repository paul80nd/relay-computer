import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

@Component({
    selector: '[rc-byte-leds]',
    templateUrl: 'byte_leds.component.svg'
})

export class ByteLedsComponent {

    @Input() value: BitValue;

}

import { Component, input } from '@angular/core';

import { BitValue } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-dbl-byte-leds]',
    templateUrl: 'dbl_byte_leds.component.html',
    standalone: true
})

export class DoubleByteLedsComponent {

  readonly value = input.required<BitValue>();

}

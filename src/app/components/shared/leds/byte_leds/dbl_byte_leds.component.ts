import { Component, Input } from '@angular/core';

import { BitValue } from '@paul80nd/relay-computer-model';
import { NgFor } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-dbl-byte-leds]',
    templateUrl: 'dbl_byte_leds.component.html',
    standalone: true,
    imports: [NgFor]
})

export class DoubleByteLedsComponent {

  @Input() value!: BitValue;

}

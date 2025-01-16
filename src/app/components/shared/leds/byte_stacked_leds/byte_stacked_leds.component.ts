import { Component, Input } from '@angular/core';

import { BitValue } from '@paul80nd/relay-computer-model';
import { NgFor } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-byte-stacked-leds]',
    templateUrl: 'byte_stacked_leds.component.svg',
    standalone: true,
    imports: [NgFor]
})

export class ByteStackedLedsComponent {

  @Input() value!: BitValue;

}

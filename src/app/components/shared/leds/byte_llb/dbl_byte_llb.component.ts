import { Component, Input } from '@angular/core';

import { BitValue } from '@paul80nd/relay-computer-model';
import { NgFor } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-dbl-byte-llb]',
    templateUrl: 'dbl_byte_llb.component.html',
    standalone: true,
    imports: [NgFor]
})

export class DoubleByteLedLightBarComponent {

  @Input() value!: BitValue;

}

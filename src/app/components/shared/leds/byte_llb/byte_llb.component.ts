import { Component, Input } from '@angular/core';

import { BitValue } from '@paul80nd/relay-computer-model';
import { NgFor } from '@angular/common';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
    selector: '[rc-byte-llb]',
    templateUrl: 'byte_llb.component.svg',
    standalone: true,
    imports: [NgFor]
})

export class ByteLedLightBarComponent {

  @Input() value!: BitValue;

}

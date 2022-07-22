import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-byte-llb]',
  templateUrl: 'byte_llb.component.svg'
})

export class ByteLedLightBarComponent {

  @Input() value!: BitValue;

}

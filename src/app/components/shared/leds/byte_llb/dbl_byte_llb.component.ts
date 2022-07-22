import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-dbl-byte-llb]',
  templateUrl: 'dbl_byte_llb.component.html'
})

export class DoubleByteLedLightBarComponent {

  @Input() value!: BitValue;

}

import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

@Component({
  selector: '[rc-byte-llb]',
  templateUrl: 'byte_llb.component.svg'
})

export class ByteLedLightBarComponent {

  @Input() value!: BitValue;

}

import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

@Component({
  selector: '[rc-dbl-byte-leds]',
  templateUrl: 'dbl_byte_leds.component.html'
})

export class DoubleByteLedsComponent {

  @Input() value: BitValue;

}

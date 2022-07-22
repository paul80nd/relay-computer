import { Component, Input } from '@angular/core';

import { BitValue } from '../../../../model/bit_value';

@Component({
  selector: '[rc-byte-stacked-leds]',
  templateUrl: 'byte_stacked_leds.component.svg'
})

export class ByteStackedLedsComponent {

  @Input() value: BitValue;

}

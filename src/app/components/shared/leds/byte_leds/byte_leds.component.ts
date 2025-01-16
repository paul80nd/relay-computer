import { Component, input } from '@angular/core';
import { BitValue } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-byte-leds]',
  templateUrl: 'byte_leds.component.svg'
})

export class ByteLedsComponent {

  readonly value = input.required<BitValue>();
}

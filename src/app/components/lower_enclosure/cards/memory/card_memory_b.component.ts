import { Component, input } from '@angular/core';

import { IMemoryCard } from '@paul80nd/relay-computer-model';
import { ByteLedsComponent } from '../../../shared/leds/byte_leds/byte_leds.component';
import { DoubleByteLedsComponent } from '../../../shared/leds/byte_leds/dbl_byte_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-memory-b]',
  templateUrl: 'card_memory_b.component.svg',
  imports: [ByteLedsComponent, DoubleByteLedsComponent]
})

export class CardMemoryBComponent {

  readonly card = input.required<IMemoryCard>();

}

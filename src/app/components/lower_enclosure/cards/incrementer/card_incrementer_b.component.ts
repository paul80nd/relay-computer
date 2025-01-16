import { Component, input } from '@angular/core';

import { IIncrementerCard } from '@paul80nd/relay-computer-model';
import { Register16LedsComponent } from '../../../shared/leds/register_leds/register_16_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-incrementer-b]',
  templateUrl: 'card_incrementer_b.component.svg',
  imports: [Register16LedsComponent]
})

export class CardIncrementerBComponent {

  readonly card = input.required<IIncrementerCard>();

}

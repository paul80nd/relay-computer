import { Component, input } from '@angular/core';

import { IRegisterICard } from '@paul80nd/relay-computer-model';
import { RegisterLedsComponent } from '../../../shared/leds/register_leds/register_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-i]',
  templateUrl: 'card_register_i.component.svg',
  imports: [RegisterLedsComponent]
})

export class CardRegisterIComponent {

  readonly card = input.required<IRegisterICard>();

}

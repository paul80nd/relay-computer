import { Component, input } from '@angular/core';

import { IRegisterBCCard } from '@paul80nd/relay-computer-model';
import { RegisterLedsComponent } from '../../../shared/leds/register_leds/register_leds.component';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-bc]',
  templateUrl: 'card_register_bc.component.svg',
  imports: [RegisterLedsComponent]
})

export class CardRegisterBCComponent {

  readonly card = input.required<IRegisterBCCard>();

}

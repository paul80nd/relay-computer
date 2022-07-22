import { Component, Input } from '@angular/core';

import { IRegisterICard } from '../../../../model/cards/register_i.card';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-i]',
  templateUrl: 'card_register_i.component.svg'
})

export class CardRegisterIComponent {

  @Input() card!: IRegisterICard;

}

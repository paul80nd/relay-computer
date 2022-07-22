import { Component, Input } from '@angular/core';

import { IRegisterBCCard } from '../../../../model/cards/register_bc.card';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-bc]',
  templateUrl: 'card_register_bc.component.svg'
})

export class CardRegisterBCComponent {

  @Input() card!: IRegisterBCCard;

}

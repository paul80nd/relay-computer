import { Component, Input } from '@angular/core';

import { IRegisterBCCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-bc]',
  templateUrl: 'card_register_bc.component.svg'
})

export class CardRegisterBCComponent {

  @Input() card!: IRegisterBCCard;

}

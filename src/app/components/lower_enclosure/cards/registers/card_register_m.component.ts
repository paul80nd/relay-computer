import { Component, Input } from '@angular/core';

import { IRegisterMCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-m]',
  templateUrl: 'card_register_m.component.svg'
})

export class CardRegisterMComponent {

  @Input() card!: IRegisterMCard;

}

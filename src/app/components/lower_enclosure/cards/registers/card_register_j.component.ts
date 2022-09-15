import { Component, Input } from '@angular/core';

import { IRegisterJCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-j]',
  templateUrl: 'card_register_j.component.svg'
})

export class CardRegisterJComponent {

  @Input() card!: IRegisterJCard;

}

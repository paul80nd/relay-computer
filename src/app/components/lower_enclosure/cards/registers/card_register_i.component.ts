import { Component, Input } from '@angular/core';

import { IRegisterICard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-i]',
  templateUrl: 'card_register_i.component.svg'
})

export class CardRegisterIComponent {

  @Input() card!: IRegisterICard;

}

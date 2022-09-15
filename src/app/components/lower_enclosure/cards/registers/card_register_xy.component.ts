import { Component, Input } from '@angular/core';

import { IRegisterXYCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-xy]',
  templateUrl: 'card_register_xy.component.svg'
})

export class CardRegisterXYComponent {

  @Input() card!: IRegisterXYCard;

}

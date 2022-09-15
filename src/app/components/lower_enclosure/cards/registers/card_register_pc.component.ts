import { Component, Input } from '@angular/core';

import { IRegisterPCCard } from '@paul80nd/relay-computer-model';

/* eslint-disable @angular-eslint/component-selector -- used in svg group */
@Component({
  selector: '[rc-card-register-pc]',
  templateUrl: 'card_register_pc.component.svg'
})

export class CardRegisterPCComponent {

  @Input() card!: IRegisterPCCard;

}
